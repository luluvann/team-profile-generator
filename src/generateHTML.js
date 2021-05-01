function generateHTML(data) {

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
    rel="stylesheet"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>My Team</title>
</head>
<body>
    <header>
        <h2>My Team</h2>
    </header>
    <main>
    <div class="card">
        <div class="cardHeader">
            <h3>${data.name}</h3>
            <p>${data.position}</p>
        </div>
        <div class="cardBody">
            <p class="row"><span class="key">${data.key}:</span> <span class="value">${data.value}</span></p>
        </div>
    </div>
    </main>
</body>
</html>
    `;
}
