import React, { useState } from "react";
import { Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
let Ir: String = '0';
let Sindicato: String = '0';
let INSS: String = '0';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});



function Calcula(salario: String | null) {

    let number = Number(salario);
    CalculaIR(number);
    CalculaInss(number);
    CalculaSindicato(number);
    TotalLiquido(number);

}
function CalculaIR(salario: number | 0) {
    let IR = 11 / 100;
    let calculaIr = IR * salario
    Ir = String(calculaIr);
    console.log(Ir)
    return (
        Ir
    )

}
function CalculaInss(salario: number | 0) {
    let Inss = 8 / 100;
    let calculaInss = Inss * salario
    let INSS = String(calculaInss);
    console.log(INSS)
    return (
        INSS
    )
}
function CalculaSindicato(salario: number | 0) {
    let sindicato = 5 / 100;
    let CalculaSindicato = sindicato * salario
    let Sindicato = String(CalculaSindicato);
    console.log(Sindicato)
    return (
        Sindicato
    )
}
function TotalLiquido(salario: number | 0) {
    let totalDescontos = Number(Sindicato) + Number(INSS) + Number(Ir);
    console.log(totalDescontos)
    let CalculaLiquido = salario - totalDescontos;
    let resultadoLiquido = String(CalculaLiquido);
    console.log(resultadoLiquido)
    return (
        resultadoLiquido
    )
}

export function Home() {
    const [Salario, setSalario] = useState<String | null>(null)
    return (
        <View style={styles.container}>
            <Text>Salário Bruto</Text>
            <TextInput keyboardType="numeric" placeholder="Digite seu salario bruto aqui" onChangeText={Salario => {
                return setSalario(Salario);
            }}></TextInput>
            <Text > IR (11%) : R$</Text>
            <Text>INSS (8%) : R$</Text>
            <Text>Sindicato ( 5%) : R$</Text>
            <Text>Salário Líquido : R$</Text>
            <StatusBar style="auto" />
            <Button
                onPress={() => {
                    return Calcula(Salario);
                }}
                title="Calcular"
            />
        </View>
    )
}