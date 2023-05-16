export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":")

    return Number(horas) * 3600 + Number(minutos) * 60 + Number(segundos)
}

export function ajustarRelogio(tempo: number) {
    const minutos = Math.floor(tempo/60)
    const segundos = tempo%60
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0')
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0')
    return {minutoDezena, minutoUnidade, segundoDezena, segundoUnidade}
}