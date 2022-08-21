function program(vehicles) {
    // code

    //O(N)
    const faster = vehicles.reduce((a, b) => {
        const _a = getTotalVelocity(a);
        const _b = getTotalVelocity(b);

        return _a.speed > _b.speed ? a : b
    })

    return `The winner is: ${faster.name}, with a speed of ${faster.speed} ${faster.unit}`

}

function getTotalVelocity(vehicle) {
    switch (vehicle.unit) {
        case 'km/h':
            return { name: vehicle.name, speed: vehicle.speed, unit: vehicles.unit }
        case 'm/s':
            return { name: vehicle.name, speed: vehicle.speed * (3.6), unit: vehicles.unit }
        case 'km/s':
            return { name: vehicle.name, speed: vehicle.speed * (3600), unit: vehicles.unit }
        case 'mi/h':
            return { name: vehicle.name, speed: vehicle.speed * (1.60934), unit: vehicles.unit }

        default:
            break;
    }
}

const vehicles = [
    { name: 'Carlos Sainz', speed: 120, unit: 'km/h' },
    { name: 'Max Verstappen', speed: 30, unit: 'm/s' },
    { name: 'Ricciardo Ocon', speed: 0.035, unit: 'km/s' },
    { name: 'Pierre Gasly', speed: 80, unit: 'mi/h' },
    { name: 'Lewis Hamilton', speed: 120, unit: 'km/h' },
    { name: 'Valtteri Botas', speed: 30, unit: 'm/s' },
    { name: 'Kevin Magnussen', speed: 0.03, unit: 'km/s' },
    { name: 'Antonio Giovinazzi', speed: 88, unit: 'mi/h' },
    { name: 'Esteban Occon', speed: 120, unit: 'km/h' },
    { name: 'Jose Perez', speed: 32, unit: 'm/s' },
    { name: 'Daniil Kviat', speed: 0.038, unit: 'km/s' },
    { name: 'Sergio Perez', speed: 72, unit: 'mi/h' }
]

console.log(program(vehicles))
//The winner is: Ricciardo Ocon, with a speed of 126 km/h