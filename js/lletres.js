var nom = ['S','e','r','a','f','í','n'];
var operacio = '';

$( document ).ready(function() {
  // Handler for .ready() called.
    $('.exercici').click(function(){exercicis(this);});
    $('.btnOp').click(function(){setOperacio(this);});
    $('#valor1').change(function(){calcular();});
    $('#valor2').change(function(){calcular();});
    $('#reset').click(function(){reset();});
});

function exercicis(btn){
    nomFunc = 'exercici'+$(btn).attr('exercici');
    self[nomFunc]();
}

//exercici 1
function exercici1(){
    var nom = ['S','e','r','a','f','í','n'];
    nom.forEach(element => {
       console.log(element) ;
    });
}

function exercici2(){
    var nom = ['S','3','r','a','f','í','n'];
    var vocals = /[aáàäeéèëiíìïoóòöuúùü]/;
    var valids = /[0-9a-zA-Z]/;
    var nombres = /[0-9]/;

    nom[1] = '3';
    nom.forEach(element => {
        if (element.match(valids) || element.toLowerCase().match(vocals)){
            if (element.match(nombres)) {
                console.log('Els noms de persones no contenen el número ' + element);
            } else {
                if (element.toLowerCase().match(vocals)){
                    console.log('He trobat la VOCAL '+ element);
                } else {
                    console.log('He trobat la CONSONANT '+ element);
                }
            }
        }else {
            console.log('Els noms de persones no contenen el caràcter ' + element);
        }
    });
}

function exercici3(){
    var nom = ['S','e','r','e','f','í','n'];
    var mapNom = new Map();
    var cant = 0;

    nom.forEach(element => {
        if (mapNom.has(element)){
            cant = mapNom.get(element);
            cant++;
        }else {
            cant = 1;
        }
        mapNom.set(element,cant);
    });
    mapNom.forEach( mostrarMap);
}
 function mostrarMap(v,k){
     console.log(k + ": " + v);
 }

function exercici4(){
    var nom = ['S','e','r','a','f','í','n'];
    var cognom = ['C','a','s','t','a','ñ','o'];
    var fullName = nom.concat([' ']).concat(cognom);

    fullName.forEach(element => {
       console.log(element) ;
    });
}

function exercici5(){
var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar '+
        'correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que '+
        'sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se '+
        'puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para '+
        'usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en '+
        'cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), '+
        'el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: '+
        'La parte del dominio depende del dominio bajo el cual se crea la dirección de correo '+
        'electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a '+
        'proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si '+
        'utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su '+
        'propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo '+
        'electrónico que configura para el dominio lo tienen como parte del dominio '+
        '(nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). '+
        'El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar '+
        'libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre '+
        'o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de '+
        'correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada '+
        'ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su '+
        'dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican '+
        'porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio '+
        'dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 

    var emails1 = extractEmails(str);
    var emails = new Array();
    emails1.forEach(element => {
        if (emails.indexOf(element)<0) {
            emails.push(element);
        }
    });
    emails.forEach(element => {
        console.log(element);
    });
}

function extractEmails (text)
{
    return text.match(/([a-zA-Z0-9._-Ññ-]+@[a-zA-Z0-9._-Ññ-]+\.[a-zA-Z0-9._-]+)/gi);
}

