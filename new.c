#include<stdio.h>
#include<conio.h>
#include<math.h>
int a[30],count=0;
int place(int pos)
{
    int i;
    for(i=1; i<pos;i++)
    {
        if((a[i]==a[pos])||((abs(a[i]-a[pos])==abs(i-pos))))
        return 0;
    }
}