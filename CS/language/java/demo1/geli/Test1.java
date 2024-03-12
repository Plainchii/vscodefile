package demo1.geli;

public class Test1 {
    public static void main(String[] args) {
        Interface1 i1 = new class_A();
        useE use_e = new useE();
        Interface2 i2 = new class_B();
        useF use_f = new useF();
        
        use_e.depend1(i1);
        use_e.depend2(i1);
        use_e.depend3(i1);
        use_f.depend1(i2);
        use_f.depend4(i2);
        use_f.depend5(i2);
    }

}