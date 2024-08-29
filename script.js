fetch("pages/home/home-card.html")
    .then(response => {
        return response.text()
    }).then(data => {
        document.getElementById("home").innerHTML = data;
    });

    fetch("pages/about/about.html")
    .then(response => {
        return response.text()
    }).then(data => {
        document.getElementById("about").innerHTML = data;
    });

    fetch("pages/projects/projects.html")
    .then(response => {
        return response.text()
    }).then(data => {
        document.getElementById("projects").innerHTML = data;
    });
    fetch("pages/contact/contact.html")
    .then(response => {
        return response.text()
    }).then(data => {
        document.getElementById("contact").innerHTML = data;
    });


    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
      }
      function hideSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
      }