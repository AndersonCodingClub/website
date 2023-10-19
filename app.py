from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/schedule')
def schedule():
    return render_template('schedule.html')

@app.route('/members')
def members():
    return 'Members'

@app.route('/register')
def register():
    return render_template('register.html')
    

if __name__ == '__main__':
    app.run(debug=True)
    
    
#localhost:5000