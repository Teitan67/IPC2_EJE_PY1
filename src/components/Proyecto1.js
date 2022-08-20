import React, { Component } from 'react'
import Celula from '../classes/Celulas'

export default class Proyecto1 extends Component {
    state = {
        M: 10,
        muestra: []

    }
    componentDidMount(){
        this.generarMuestra();
    }

    generarMuestra() {
        let muestra = this.state.muestra;
        muestra = [];
        this.setState({ muestra: muestra });

        let m = this.state.M;
        m = document.getElementById('muestra').value;
        this.setState({ M: m });
        let arraySize = 0;

        for (let y = 0; y < m; y++) {
            for (let x = 0; x < m; x++) {
                muestra.push(new Celula(false, x, y, arraySize));
                arraySize++;
            }
        }
        this.setState({ muestra: muestra });
        console.log("Tamaño del arreglo: " + Number(arraySize))
    }

    nuevaMuestra(muestra) {
        let celulasEnfermas = [];


        for (const celula of muestra) {
            //Analizamos las celulas
            if (celula.enferma) {
                const vecinos = celula.obtenerVecinos();

                if (this.seguirEnferma(muestra, vecinos)) {
                    celulasEnfermas.push(celula.posicion)
                }

            } else {
                const vecinos = celula.obtenerVecinos();
                if (this.enfermarCelula(muestra, vecinos)) {
                    celulasEnfermas.push(celula.posicion)
                }
            }

        }
        for (const celula of muestra) {
            celula.sanar();
        }
        for (const celula of celulasEnfermas) {
            const cel = muestra[celula]
            console.log(cel)
            cel.enfermar()
        }
        let muestra_ = this.state.muestra;
        muestra_ = muestra
        this.setState({ muestra: muestra_ })
    }
    seguirEnferma(muestra, vecinos) {
        let vecinosEnfermos = 0
        for (const vecino of vecinos) {
            if ((vecino.x >= 0 && vecino.x < this.state.M) && (vecino.y >= 0 && vecino.y < this.state.M)) {
                const posicion = vecino.x + vecino.y * this.state.M;

                const celula = muestra[posicion];
                if (celula.enferma) {

                    vecinosEnfermos++
                }
            }
        }
        if (vecinosEnfermos === 2 || vecinosEnfermos === 3) {
            return true;
        }
        return false
    }

    enfermarCelula(muestra, vecinos) {
        let vecinosEnfermos = 0
        for (const vecino of vecinos) {


            if ((vecino.x >= 0 && vecino.x < this.state.M) && (vecino.y >= 0 && vecino.y < this.state.M)) {
                const posicion = vecino.x + vecino.y * this.state.M;

                const celula = muestra[posicion];
                if (celula.enferma) {

                    vecinosEnfermos++
                }
            }
        }
        if (vecinosEnfermos === 3) {
            return true;
        }
        return false
    }


    analizar() {

        const nuevaM = Object.assign(this.state.muestra)
        this.nuevaMuestra(nuevaM)
    }

    cambiar(celula) {
        if (celula.enferma) {
            celula.sanar();
        } else {
            celula.enfermar();
        }
        this.setState({ muestra: this.state.muestra })
    }

    render() {
        return (
            <>
                <div className='col-3'>
                    <p className='display-4 text-center'>Proyecto1</p>
                    <div className='form-group'>
                        <label>Dimension de la muestra
                            <input id='muestra' className='form-control text-center' type={'number'} step={10} defaultValue={10} min={10} />
                        </label>

                    </div>
                    <div className='form-group'>
                        <button className='btn btn-secondary' onClick={() => this.generarMuestra()}>Generar muestra</button>
                    </div>


                </div>
                <div className='col-9 text-center'>

                    {
                        this.state.muestra.map((celula, i) => (
                            <p key={i} className={celula.enferma ? 'bg-warning  d-inline' : 'bg-ligth d-inline'} onClick={() => this.cambiar(celula)}>|░|<br className={celula.x === this.state.M - 1 ? "" : "d-none"} /> </p>
                        ))
                    }
                    <div className='form-group'>

                        <button className='btn btn-success ' onClick={() => this.analizar()}>Analizar</button>
                        <p className='fs-6 text-warning'>Analizar la muestra para ver el siguiente periodo</p>
                    </div>
                    <p className='text-danger'>Puedes infectar las celulas con un click en ellas</p>

                </div>
            </>


        )
    }
}
