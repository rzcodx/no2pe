<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" /> 
		<title>Contacto</title>
		<link href='http://fonts.googleapis.com/css?family=Alegreya+Sans:400,700' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<?php
			if ( isset($_POST['nombre']) && isset($_POST['email']) && isset($_POST['mensaje'])){
				echo "<script>alert('Su mensaje se envio correctamente');</script>";
			}
		?>
		<script type="text/javascript" src="js/script.js"></script>
	</head>
	<body>
		<div class="wrapper">
			<form class="frmLogin" name="frmLogin" action="index.php" method="post">
				<h1>CONTACTO</h1>
				<p>Nombres y Apellidos:</p>
				<input type="text" placeholder="Nombres y Apellidos" id="nombre" name="nombre" onkeypress="validarNombres()" onkeyup="validarNombres2()" onblur="nombresLength()">
				<span id="errorNombre" class="error"></span>
				<p>Correo Electrónico:</p>
				<input type="text" placeholder="mi@correo.com" id="email" name="email" onblur="validaEmail()">
				<span id="errorCorreo" class="error"></span>
				<p>Mensaje <span id="infoMensaje">(min. 200 caracteres):</span><span id="ncaracteres">200</span></p>
				<textarea id="mensaje" name="mensaje" rows="4" onkeypress="validarMensaje()" onkeyup="validarMensaje2()" onblur="mensajeLength()"></textarea>
				<span id="errorMensaje" class="error"></span>
				<button type="button" id="reset" onclick="limpiar()">Reset</button>
				<button type="button" id="enviar" onclick="validar()">Enviar</button>
			</form>
			<div id="loader">
				<div>
					<img id="loaderText" src="img/loadertext.gif" alt="">
					<img id="loaderImg" src="img/loader.gif" alt="">
				</div>
			</div>
		</div>
	</body>
</html>