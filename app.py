from flask import Flask, render_template


app = Flask(__name__)

@app.route('/favicon.ico')
def favicon():
    return Flask.url_for('static', filename='images/favicon.ico')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/schedule')
def schedule():
    return render_template('schedule.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/members')
def members():
    return render_template('members.html')

@app.route('/register')
def register():
    return render_template('register.html')

if __name__ == '__main__':
    app.run(debug=True)
    
# http://10.9.152.55:5000
