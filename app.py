from flask import Flask, render_template, request, redirect, url_for, flash
import sqlite3 as sql
from datetime import datetime

app = Flask(__name__)
app.secret_key = "1234"

now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')


@app.route('/')
def home():
    con = sql.connect('database.db')
    con.row_factory = sql.Row

    cur = con.cursor()
    cur.execute("select * from note")

    rows = cur.fetchall()
    row_len = (len(rows) // 2) + (len(rows) % 2)
    return render_template('index.html', rows=rows, row_len=row_len)


@app.route('/write_memo', methods=['POST'])
def write_memo():
    content = request.form['memo-content']
    if len(request.form) == 2:
        password = request.form['memo-pw']
        if password == '':
            password = 'null'
            locked = 'F'
        else:
            locked = 'T'
    else:
        locked = 'F'
        password = 'null'
    with sql.connect('database.db') as con:
        cur = con.cursor()
        cur.execute("INSERT INTO note (content, locked, password, created) VALUES (?, ?, ?, ?)",
                    (content, locked, password, now))
        print('INSERT memo Success')
    return redirect(url_for('home'))


@app.route('/delete_memo', methods=["GET"])
def delete_memo():
    try:
        number = request.args.get('number')
        
        with sql.connect('database.db') as con:
            cur = con.cursor()
            cur.execute(f"DELETE FROM note WHERE number = {number}")
            print('DELETE memo Success')
    except:
        con.rollback()
    finally:
        return redirect(url_for('home'))


@app.route('/memo_detail')
def memo_detail():
    try:
        number = request.args.get('number')
        with sql.connect('database.db') as con:
            con.row_factory = sql.Row

            cur = con.cursor()
            cur.execute(f"SELECT * FROM note WHERE number = {number}")

            rows = cur.fetchall()
    except:
        con.rollback()
    finally:
        return render_template('detail.html', rows=rows)


@app.route('/check_pw', methods=['POST'])
def check_pw():
    number = request.form['memo-number']
    pw = request.form['pw']
    with sql.connect('database.db') as con:
        con.row_factory = sql.Row

        cur = con.cursor()
        cur.execute(f"SELECT * FROM note WHERE number = {number}")

        rows = cur.fetchall()
        for row in rows:
            password = row["password"]
        if password == pw:
            return redirect(url_for('memo_detail', number=number))
        else:
            flash("잘못된 비밀번호입니다.")
            return redirect(url_for('home'))


@app.route('/update_memo')
def update_memo():
    try:
        number = request.args.get('number')
        content = request.args.get('content')
        locked = request.args.get('locked')
        password = request.args.get('pw')
        if locked == 'F':
            password = 'null'
        with sql.connect('database.db') as con:
            cur = con.cursor()
            cur.execute("UPDATE note SET content = ?, locked = ?, password = ?, created = ? WHERE number = ?",
                        (content, locked, password, now, number))
            print('UPDATE memo Success')
    except:
        con.rollback()
    finally:
        return redirect(url_for('memo_detail', number=number))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5001', debug=True)
