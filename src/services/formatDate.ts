export const formatDateService = (date: Date) => {
    const diasSemana = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
    ]
    const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ]

    const diaSemana = diasSemana[date.getDay()]
    const diaMes = date.getDate()
    const año = date.getFullYear()
    const mes = meses[date.getMonth()]
    const hora = date.getHours()
    const minutos = date.getMinutes()

    return `${diaSemana} ${diaMes} de ${mes} de ${año} a las ${hora}:${minutos}`
}
