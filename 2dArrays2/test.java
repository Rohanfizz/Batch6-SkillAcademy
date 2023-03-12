import java.util.*;

class test{
    public static void main(String[] args){
        Scanner scn = new Scanner(System.in);

        int i = 0;
        int j = 0;
        String dir = "";
        int[][] arr = new int[5][5];
        while(i>=0 && j>=0 && i<arr.length && j<arr[0].length){
            if(arr[i][j] == 1){
                arr[i][j] = 0;
                //change the direction
                if(dir == "E") dir = "S";
                else if(dir == "S") dir = "W";
                else if(dir == "W") dir = "N";
                else if(dir == "N") dir = "E";
            }
        
            //move
            if(dir == "S"){
                i++;
            }else if(dir == "W"){
                j--;
            }else if(dir == "N"){
                i--;
            }else if(dir == "E"){
                j++;
            }
        }
        if(dir == "W") j++;
        else if(dir == "E") j--;
        else if(dir == "N") i++;
        else if(dir == "S") i--;

        scn.close();
    }
}