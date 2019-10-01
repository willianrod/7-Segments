import React, { PureComponent } from 'react';

import styles from './Display.module.scss';
import { and, not, or } from '../utils/portas';

export default class Display extends PureComponent {

    state = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
    };

    _getSegmentOutput = () => {
        const { displayState } = this.props;
        const A = displayState[0];
        const B = displayState[1];
        const C = displayState[2];
        const D = displayState[3];

        const a = or(and(not(B), not(D)), and(not(A), C), and(not(A), B, D), and(B, C), and(A, not(B), not(C)), and(A, not(D)));
        const b = or(and(not(A),not(B)),and(not(A),not(C),not(D)),and(not(B),not(D)),and(not(A),C,D),and(A,not(C),D));
        const c = or(and(not(A),not(C)),and(not(A),D),and(not(C),D),and(not(A),B),and(A,not(B)));
        const d = or(and(not(A),not(B),not(D)),and(not(B),C,D),and(B,not(C),D),and(B,C,not(D)),and(A,not(C)));
        const e = or(and(not(B),not(D)),and(C,not(D)),and(A,C),and(A,B))
        const f = or(and(not(C),not(D)),and(not(A),B,not(C)),and(B,not(D)),and(A,not(B)),and(A,C));
        const g = or(and(not(B),C),and(C,not(D)),and(not(A),B,not(C)),and(A,not(B)),and(A,D));
        
        this.setState({ a, b, c, d, e, f, g });
    }

    render() {
        const { a, b, c, d, e, f, g } = this.state;
        this._getSegmentOutput();
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="147.689" height="225" viewBox="0 0 147.689 225">
                <path id="Caminho_1" data-name="Caminho 1" className={styles.shadow} d="M228,311l-10.689-10.689H354.5V86L365,96.5V311Z" transform="translate(-217.311 -86)" />
                <rect id="Retângulo_1" data-name="Retângulo 1" className={styles.rect} width="137" height="215" />
                <g id="Grupo_1" data-name="Grupo 1" transform="translate(-218 -90.5)">
                    <rect id="Retângulo_6" data-name="Retângulo 6" className={a ? styles.ledOn : styles.ledOff} width="12" height="71" transform="translate(322.5 100.5) rotate(90)" />
                    <rect id="Retângulo_3" data-name="Retângulo 3" className={b ? styles.ledOn : styles.ledOff} width="12" height="65" transform="translate(330 120)" />
                    <rect id="Retângulo_5" data-name="Retângulo 5" className={c ? styles.ledOn : styles.ledOff} width="12" height="65" transform="translate(330 210)" />
                    <rect id="Retângulo_8" data-name="Retângulo 8" className={d ? styles.ledOn : styles.ledOff} width="12" height="71" transform="translate(322.5 280.5) rotate(90)" />
                    <rect id="Retângulo_4" data-name="Retângulo 4" className={e ? styles.ledOn : styles.ledOff} width="12" height="65" transform="translate(230 210)" />
                    <rect id="Retângulo_2" data-name="Retângulo 2" className={f ? styles.ledOn : styles.ledOff} width="12" height="65" transform="translate(230 120)" />
                    <rect id="Retângulo_7" data-name="Retângulo 7" className={g ? styles.ledOn : styles.ledOff} width="12" height="71" transform="translate(322.5 190.5) rotate(90)" />
                </g>
            </svg>

        );
    };

}