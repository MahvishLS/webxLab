from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Homepage route
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/profile/<username>')
def profile(username):
    return render_template('profile.html', username=username)

# Submit page route - Display the form and handle the POST request
@app.route('/submit', methods=['GET', 'POST'])
def submit():
    if request.method == 'POST':
        name = request.form.get('name')
        age = request.form.get('age')

        return render_template('confirmation.html', name=name, age=age)
    return render_template('submit.html')

if __name__ == '__main__':
    app.run(debug=True)
