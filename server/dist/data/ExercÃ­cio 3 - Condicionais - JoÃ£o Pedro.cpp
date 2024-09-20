/*
Fa�a um programa que fa�a a leitura de um valor num�rico (por parte do uus�rio);
	- age;
	
Para isso, ser�o necess�rio:
A importa��o de biblioteca de entrada e sa�da de dados: "stdio.h";
Defini��o de uma vari�vel para armazenar o valor da entrada.

Ap�s a entrada dos dados, fa�a uma l�gica que dir� em qual modalidade esportiva de jud� o usu�rio participar�.
- Ser� necess�rio o uso de condicionais.

Seguindo os seguintes crit�rios:

	- 6 � 9 anos ===> modalidade infantil;
	- 10 � 12 anos ===> modalidade pr�-adolescente;
	- 13 � 16 anos ==> modalidade adolescente;
	- 17 � 18 anos ===> modalidade jovem;
	- 19 para cima ===> modalidade adulta;
	
	*obs: essa organiza��o de modalidade foi feita para fins did�ticos e n�o condiz com a real modalidade esportiva
	do jud�.

===> DESAFIO:
	Fa�a uma l�gica que fa�a o programa dizer se a idade n�o � real ( age < 0 e age > 110); 
	
ENTREGA:
realizar o exerc�cio proposto at� a data: 12/09 at� as 19h30. Enviar esse arquivo - com a atividade resolvida -
e renomeado da seguinte forma: Exerc�cio 1 - Entrada e sa�da - nomedoaluno.cpp
*/

// Fa�a o exerc�cio abaixo: 

#include <stdio.h>
#include <locale.h>

int main() {
    int age;
    
    printf("Digite sua idade.");
    scanf("%d", &age);
    
    if(age >=6 && age <=9) {
		printf("Modalidade infantil \n");
	} else if(age >=10 && age <=12) {
		printf("Modalidade pr�-adolescente \n");
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