<?php 
require("PDO.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- meta info -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="test-recrutement-adapt">
    <meta name="keywords" content="agence demo">
    <meta name="author" content="terencePersin">
    <!-- titre -->
    <title>test-recrutement-adapt-offres</title>
    <link rel="icon" type="image/x-icon" href="./img/logo-client.jpg">
    <!-- Font Awesome Icons -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <!-- stylesheets -->
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <header-component></header-component>
    <section style="text-align: center;">
        <h1 style="font-size: x-large; padding: 15px;">Liste de nos offres</h1>
    </section>
    <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>LIBTYPE</th>
            <th>TEXTE</th>
            <th>PRIX</th>
            <th>CP</th>
            <th>VILLE</th>
            <th>SURFHAB</th>
            <th>SURFTERRAIN</th>
          </tr>
        </thead>
        <tbody>
          <?php while($row = $stmt->fetch(PDO::FETCH_ASSOC)) : ?>
          <tr>
            <td><?php echo htmlspecialchars($row['ID']); ?></td>
            <td><?php echo htmlspecialchars($row['LIBTYPE']); ?></td>
            <td><?php echo htmlspecialchars_decode($row['TEXTE']); ?></td>
            <td><?php echo htmlspecialchars($row['PRIX']); ?></td>
            <td><?php echo htmlspecialchars($row['CP']); ?></td>
            <td><?php echo htmlspecialchars($row['VILLE']); ?></td>
            <td><?php echo htmlspecialchars($row['SURFHAB']); ?></td>
            <td><?php echo htmlspecialchars($row['SURFTERRAIN']); ?></td>
          </tr>
          <?php endwhile; ?>
        </tbody>
      </table>
      <footer-component></footer-component>
    <!-- Script module header -->
    <script type="module" src="./js/header.js"></script>
    <script type="module" src="./js/footer.js"></script>
</body>
</html>