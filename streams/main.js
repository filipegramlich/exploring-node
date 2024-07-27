import { Readable, Transform ,Writable } from 'node:stream';

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

class InverseNumber extends Transform {
  _transform(chunk, encondig, callback){
    const transformed_chunk = Number(chunk.toString()) * -1;
    callback(null, Buffer.from(String(transformed_chunk)));
  }
}

class MultiplyToHundredStream extends Writable {
  _write(chunk, encoding, callback){
    console.log( Number(chunk.toString()) * 10 );
    callback();
  }
}


new OneToHundredStream()
  .pipe(new InverseNumber())
  .pipe(new MultiplyToHundredStream());