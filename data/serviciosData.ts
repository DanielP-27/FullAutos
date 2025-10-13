// en la investigacion realizada para este proyecto se estableció que estos datos correspondientes a la sección servicios (información detallada) respecto de cada servicio en particular se manejaria mejor en un archivo separado, en un carpeta en la carpeta raíz del proyecto //

interface Contacto {
  direccion: string;
  telefono: string;
}

interface Servicio {
  id: number;
  nombre: string;
  precio: string;
  horarios: string;
  descripcion: string[];
  tiempoEstimado: string;
  contacto: Contacto;
}

export const serviciosData: Record<number, Servicio> = {
    1: {
        id: 1,
        nombre: 'Alineación y suspensión',
        precio: '50.000',
        horarios: 'Lun-Vie: 7:00-18:00',
        descripcion: [
        'Mantenimiento necesario para mantener el buen estado de tu vehiculo',
        'Estos garantizan una conducción equilibrada, sin vibraciones inncesarias y previniendo problemas de dirección y estabilidad.'
        ],
        tiempoEstimado: '30 - 40 minutos',
        contacto: {
        direccion: 'Carrera 15 No 45 - 20 Bogotá',
        telefono: '123-456-7890'
        }
    },
    2: {
        id: 2,
        nombre: 'Revisión preventiva',
        precio: '60.000',
        horarios: 'Lun-Vie: 7:00-18:00',
        descripcion: [
        'Realizamos una revisión completa de los componentes más importante del vehiculo (motor, transmisión, frenos,etc.).',
        'Identificamos posibles fallas antes de que se conviertan en problemas mayores.'
        ],
        tiempoEstimado: '1 - 2 horas',
        contacto: {
        direccion: 'Carrera 15 No 45 - 20 Bogotá',
        telefono: '123-456-7890'
        }
    },
    3: {
        id: 3,
        nombre: 'Cambio de aceite',
        precio: '45.000',
        horarios: 'Lun-Vie: 7:00-18:00',
        descripcion: [
        'Mantenimiento obligatorio y esencial para el buen funcionamiento y mantenimiento del vehiculo.',
        'El cambio de aceite oportuno garantiza una buena lubricación del motor y componentes conexos.'
        ],
        tiempoEstimado: '20 - 30 minutos',
        contacto: {
        direccion: 'Carrera 15 No 45 - 20 Bogotá',
        telefono: '123-456-7890'
        }
    },
    4: {
        id: 4,
        nombre: 'cambio de batería',
        precio: '80.000',
        horarios: 'Lun-Dom: 24 horas',
        descripcion: [
        'Verificamos el estado de la batería de tu behiculo y su sistema de carga para evitar fallas inesperadas.',
        'En caso necesario, realizamos el cambio de batería de manera rapida y segura.'
        ],
        tiempoEstimado: '15 - 25 minutos',
        contacto: {
        direccion: 'Carrera 15 No 45 - 20 Bogotá',
        telefono: '123-456-7890'
        }
    }
};