from flask import Flask


app = Flask(__name__)

@app.route('/')
def home():
    return 'ZAGAttack! 🤓'


if __name__ == '__main__':
    app.run()