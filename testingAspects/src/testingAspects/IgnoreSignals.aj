// Aspect-Oriented Software Development 2019/20
// Test

public class Detector {
    public int n;

    public regulate() {
        ...
    }

    ...
}

public class Regulator {
    public void act(int signal) {
        ...
    }

    ...
}


public aspect IgnoreSignals {
    
    pointcut regulations(Detector detector):
        execution(void Detector.regulate()) && this(detector); // callee space

    pointcut activations(Regulator regulator, int signal):
        call(void Regulator.act(int)) && this(regulator) && args(signal); // caller space

    pointcut activationsInRegulations(Regulator regulator, int signal, Detector detector):
        activations(regulator, signal) && cflow(regulations(detector)) // Wormhole
    
	void around(Regulator regulator, int signal, Detector detector):
        activationsInRegulations(regulator, signal, detector)) {

		if (Authority.status(detector))
			proceed(regulator, signal, detector);
	}
}

