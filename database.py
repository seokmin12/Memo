import sqlite3

conn = sqlite3.connect('database.db')
print('create & connect database')

conn.execute(
    '''
create table note (number INTEGER PRIMARY KEY AUTOINCREMENT, content VARCHAR(300), locked TEXT CHECK( locked in ('T', 'F') ), password VARCHAR(300), created VARCHAR(300))
'''
)
print('create table')

conn.close()
