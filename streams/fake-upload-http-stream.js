import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {

  count = 1;

  _read(){
    const count = this.count++;
  
    setTimeout(()=>{
      if (count > 100){
        this.push(null);
      } else {
        const buf = Buffer.from(String(count));
        this.push(buf);
      }
    }, 1000)
  }
}

fetch("http://localhost:3334", {
  method:"POST",
  body: new OneToHundredStream(),
  duplex: 'half'
})