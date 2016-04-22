import {GreeterComponent} from './greeter.component';

describe('Greeter Component', () => {
    
    beforeEach(() => {
        this.greeterComponent = new GreeterComponent();
    });
    
    it('should greet nicely', () => {
        expect(this.greeterComponent.greeting).toBe('Greetings, fellow Hobbits'); 
    });
    
})