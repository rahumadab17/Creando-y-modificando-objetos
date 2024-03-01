function Consultorio(nombre, paciente) {
    this._nombre = function() {
        return nombre;
    }

    this._paciente = function() {
        return paciente;
    }
}

Consultorio.prototype.getNombre = function() {
    return this._nombre();
}

Consultorio.prototype.setNombre = function(paciente) {
    this.paciente.push(paciente)
}

Consultorio.prototype.getPacientes = function() {
    this._paciente().forEach(function(element) {
        console.log("____________________________________")
        console.log(`Nombre: ${element._nombre()}`);
        console.log(`Edad: ${element._edad()}`);
        console.log(`Rut: ${element._rut()}`);
        console.log(`Diagnóstico: ${element._diagnostico()}`);
        console.log("____________________________________")
    });
}

Consultorio.prototype.getPacientePorNombre = function(busquedaNombre) {
    this._paciente().forEach(function(element){
        console.log("____________________________________")
        if (element._nombre() == busquedaNombre) {
            console.log(`Nombre: ${element._nombre()}`);
            console.log(`Edad: ${element._edad()}`);
            console.log(`Rut: ${element._rut()}`);
            console.log(`Diagnóstico: ${element._diagnostico()}`);
        }
        console.log("____________________________________")
    })
}

function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = function() {
        return nombre;
    }

    this._edad = function () {
        return edad;
    }

    this._rut = function () {
        return rut;
    }

    this._diagnostico = function () {
        return diagnostico;
    }
}

Paciente.prototype.getNombre = function() {
    return this._nombre();
}

Paciente.prototype.getEdad = function () {
    return this._edad();
}

Paciente.prototype.getRut = function () {
    return this._rut();
}

Paciente.prototype.getDiagnostico = function () {
    return this._diagnostico();
}

Paciente.prototype.setNombre = function(nuevo_nombre) {
    this._nombre = function(){
        return nuevo_nombre;
    }
}

Paciente.prototype.setEdad = function (nueva_edad) {
    this._edad = function () {
        return nueva_edad;
    }
}

Paciente.prototype.setRut = function (nuevo_rut) {
    this._rut = function () {
        return nuevo_rut;
    }
}

Paciente.prototype.setDiagnostico = function (nuevo_diagnostico) {
    this._diagnostico = function () {
        return nuevo_diagnostico;
    }
}

var paciente1 = new Paciente('Constanza', 25, '20.290.567-9', 'Amigdalitis');
var paciente2 = new Paciente('Juan', 44, '13.231.345-7', 'Fractura mandibular');

var consultaCesfamNunoa = new Consultorio('CESFAM Ñuñoa', [paciente1, paciente2]);

console.log(paciente1.getNombre());
console.log(paciente2.getEdad());
paciente2.setDiagnostico('Gripe');
console.log(paciente2.getDiagnostico());
console.log(consultaCesfamNunoa.getNombre());
consultaCesfamNunoa.getPacientes();
consultaCesfamNunoa.getPacientePorNombre('Constanza');
consultaCesfamNunoa.getPacientePorNombre('Juan');
