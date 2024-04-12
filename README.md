<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hack Club Kenya</title>
  <style>
    /* Reset default browser styles */
    body, h1, h2, p, ul, li, a {
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f7f7f7;
      color: #333;
    }

    header {
      background-color: #333;
      color: white;
      padding: 20px;
      text-align: center;
    }

    header h1 {
      margin: 0;
    }

    nav ul {
      list-style-type: none;
    }

    nav ul li {
      display: inline;
      margin-right: 20px;
    }

    nav ul li:last-child {
      margin-right: 0;
    }

    nav a {
      color: white;
      text-decoration: none;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    section {
      margin-bottom: 20px;
      padding: 20px;
    }

    section:nth-child(even) {
      background-color: #f9f9f9;
    }

    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 20px;
    }

    .btn {
      display: inline-block;
      padding: 10px 20px;
      background-color: #333;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .btn:hover {
      background-color: #555;
    }

    @media(max-width: 600px) {
      header {
        padding: 10px;
      }

      nav ul li {
        display: block;
        margin: 10px 0;
      }

      .container {
        padding: 10px;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to Hack Club Kenya</h1>
    <nav>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#signup">Sign Up</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="about" class="container">
    <h2>About Us</h2>
    <p>Welcome to Hack Club Kenya! We are a community of high school students passionate about coding, technology, and innovation. Join us to learn, create, and collaborate on exciting projects.</p>
  </section>

  <section id="events" class="container">
    <h2>Events</h2>
    <p>Stay tuned for our upcoming events! From workshops to hackathons, we have exciting opportunities for you to expand your skills and meet like-minded peers.</p>
  </section>

  <section id="projects" class="container">
    <h2>Projects</h2>
    <p>Check out some of the amazing projects created by our members. Get inspired, contribute, or start your own project with the support of our community.</p>
  </section>

  <section id="signup" class="container">
    <h2>Sign Up</h2>
    <p>Click the link below to sign up:</p>
    <a href="https://forms.gle/RcvVYgyujoeqELv2A" class="btn">Sign Up Now</a>
  </section>

  <section id="contact" class="container">
    <h2>Contact Us</h2>
    <p>Have questions or want to get involved? Reach out to us via email at <a href="mailto:info@hackclubkenya.com">info@hackclubkenya.com</a> or follow us on social media.</p>
  </section>

  <footer>
    <div class="container">
      <p>&copy; 2024 Hack Club Kenya</p>
    </div>
  </footer>
</body>
</html>

