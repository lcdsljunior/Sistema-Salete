<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../assets/style.css" />
    <link rel="shortcut icon" type="image/jpg" href="../assets/img/icons8-ônibus-16.png"/>
    <title>Verônica Salete LTDA</title>
</head>

<body>
    <main>
        <form action="../controllers/login.php" method="post" autocomplete="off">
            <h1>Login</h1>
            <label for="">Email</label>
            <input type="email" name="email" placeholder="Digite seu email" required />
            <label for="">Senha</label>
            <input type="password" name="senha" placeholder="Digite sua senha" required />
            <input type="submit" value="Entrar" />
            <p style="color: red">
                <?php
                    session_start();
                   if (isset($_SESSION['error'])) {
                   echo $_SESSION['error'];
                   unset($_SESSION['error']); 
                  }
              ?>
            </p>

        </form>
    </main>
</body>

</html>