from flask import Flask, render_template, request, jsonify, session, redirect, url_for

app = Flask(__name__)
app.secret_key = 'your-secret-key-change-this'
app.config['PERMANENT_SESSION_LIFETIME'] = 3600

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        try:
            full_name = request.form.get('full_name')
            email = request.form.get('email')
            phone = request.form.get('phone')
            message = request.form.get('message')
            
            if not full_name or not email or not message:
                return jsonify({'success': False, 'error': 'All fields required'}), 400
            
            # You can add email sending logic here if needed
            # For now, just return success
            return jsonify({'success': True, 'message': 'Thank you! I will contact you soon.'})
        except Exception as e:
            return jsonify({'success': False, 'error': str(e)}), 500
    return render_template('contact.html')

# Admin Login (simple without database)
@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        # Simple hardcoded admin credentials
        if username == 'admin' and password == 'admin123':
            session['admin_logged_in'] = True
            session['admin_username'] = username
            return redirect(url_for('admin_dashboard'))
        else:
            return render_template('admin_login.html', error='Invalid credentials')
    return render_template('admin_login.html')

@app.route('/admin/logout')
def admin_logout():
    session.clear()
    return redirect(url_for('admin_login'))

@app.route('/admin/dashboard')
def admin_dashboard():
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    
    # Static data for dashboard (no database)
    dashboard_data = {
        'total_messages': 0,
        'unread_messages': 0,
        'total_subscribers': 0,
        'total_views': 0,
        'recent_messages': [],
        'project_stats': [
            ('Customer Churn Analysis', 0),
            ('Heart Disease Prediction', 0),
            ('HR Analytics Dashboard', 0),
            ('Sales & Revenue Analytics', 0)
        ],
        'subscribers': []
    }
    
    return render_template('admin_dashboard.html', **dashboard_data)

@app.route('/admin/messages')
def admin_messages():
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    
    # Return empty messages list (no database)
    return render_template('admin_messages.html', messages=[])

@app.route('/admin/message/<int:msg_id>/read')
def mark_as_read(msg_id):
    if not session.get('admin_logged_in'):
        return jsonify({'error': 'Unauthorized'}), 401
    
    # No database operation
    return jsonify({'success': True})

@app.route('/admin/message/<int:msg_id>/delete', methods=['DELETE'])
def delete_message(msg_id):
    if not session.get('admin_logged_in'):
        return jsonify({'error': 'Unauthorized'}), 401
    
    # No database operation
    return jsonify({'success': True})

@app.route('/admin/subscribers')
def admin_subscribers():
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    
    # Return empty subscribers list (no database)
    return render_template('admin_subscribers.html', subscribers=[])

if __name__ == '__main__':
    print("\n🚀 Server running at: http://localhost:5000")
    print("👨‍💼 Admin Login: http://localhost:5000/admin/login")
    print("📝 Default credentials: admin / admin123\n")
    app.run(debug=True)