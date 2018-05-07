<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/">
<html>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Do+Hyeon" rel="stylesheet"/>

       <style> 
            body{font-family: 'Do Hyeon', sans-serif; text-align: center;}
            table{margin: 0 auto; } 
            td{ padding: 15px; background-color:rgba(0,0,0, 0.3); width: 105px; } 
            th{padding: 10px; background-color:#00004d; color: white;} 
        </style>
    </head>
    <body>
    <h2>Plantilla Actual</h2>
        <table border="1">
        <tr bgcolor="skyblue">
            <th>Jugador</th>
            <th>Nombre</th>
            <th>Posicion</th>
            <th>Edad</th>
            <th>Goles</th>
            <th>Nacionalidad</th>
            <th>Descripcion</th>           
        </tr>

        <xsl:for-each select="jugadores/jugador">
         <tr>
            <td>
                <xsl:element name="img">
                <xsl:attribute name="src">
                <xsl:value-of select="img/@ruta"/>
                </xsl:attribute>
                <xsl:attribute name="height"></xsl:attribute>
                </xsl:element>
            </td>
            <td><xsl:value-of select="nombre"/></td>
            <td><xsl:value-of select="posiscion"/></td>
            <td><xsl:value-of select="edad"/></td>
            <td><xsl:value-of select="goles"/></td>
            <td><xsl:value-of select="nacionalidad"/></td>
            <td><xsl:value-of select="descripcion"/></td>
        </tr>
        </xsl:for-each>

        </table>
        </body>
        </html>

    </xsl:template>
    </xsl:stylesheet>