/*
Faça um programa que faça a leitura de um valor numérico (por parte do uusário);
	- age;
	
Para isso, serão necessário:
A importação de biblioteca de entrada e saída de dados: "stdio.h";
Definição de uma variável para armazenar o valor da entrada.

Após a entrada dos dados, faça uma lógica que dirá em qual modalidade esportiva de judô o usuário participará.
- Será necessário o uso de condicionais.

Seguindo os seguintes critérios:

	- 6 à 9 anos ===> modalidade infantil;
	- 10 à 12 anos ===> modalidade pré-adolescente;
	- 13 à 16 anos ==> modalidade adolescente;
	- 17 à 18 anos ===> modalidade jovem;
	- 19 para cima ===> modalidade adulta;
	
	*obs: essa organização de modalidade foi feita para fins didáticos e não condiz com a real modalidade esportiva
	do judô.

===> DESAFIO:
	Faça uma lógica que faça o programa dizer se a idade não é real ( age < 0 e age > 110); 
	
ENTREGA:
realizar o exercício proposto até a data: 12/09 até as 19h30. Enviar esse arquivo - com a atividade resolvida -
e renomeado da seguinte forma: Exercício 1 - Entrada e saída - nomedoaluno.cpp
*/

// Faça o exercício abaixo: 

#include <stdio.h>
#include <locale.h>

int main() {
    int age;
    
    printf("Digite sua idade.");
    scanf("%d", &age);
    
    if(age >=6 && age <=9) {
		printf("Modalidade infantil \n");
	} else if(age >=10 && age <=12) {
		printf("Modalidade pré-adolescente \n");
	} else if(age >=13 && age <=16) {
		printf("Modalidade adolescente \n");
	} else if(age >=17 && age <=18) {
		printf("Modalidade jovem \n");
	} else if(age >=19 && age<=110) {
		printf("Modalidade adulta \n");
	} else {
		printf("Sua idade nao podera estar dentro das modalidades listadas. \n");
	}
	
	if (age <0 || age >110) {
        printf("A idade nao e real. \n");
	}

    return 0;
}