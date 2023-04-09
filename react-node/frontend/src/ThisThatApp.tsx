import { useState } from 'react'

export default function ThisThatApp() {
  // !FIXME: useState setters are called after isRoundDone function() (render issue)
  const [catPoints, setCatPoints] = useState<number>(0);
  const [dogPoints, setDogPoints] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);

  const cats: string[] = ["Whiskers", "Felix", "Oscar", "Smudge", "Fluffy", "Angel", "Lady", "Lucky", "Simba", "Jasper"];
  const dogs: string[] = ["Max", "Charlie", "Cooper", "Milo", "Buddy", "Rocky", "Bear", "Teddy", "Duke", "Leo"];

  // increment cat points then next item
  const incrementCatPoints = () => {
    setCatPoints(catPoints + 1);
    setIndex(index + 1);
    isRoundDone();
  }

  // increment dog points then next item
  const incrementDogPoints = () => {
    // 0 0 0
    setDogPoints(dogPoints + 1);
    // 0 0 1
    setIndex(index + 1);
    // 1 0 1
    isRoundDone();
  }

  // check if the round is done
  const isRoundDone = () => {
    // first hit: 1 0 0
    console.log(index, catPoints, dogPoints);
    if (index > 9) {
      reset();
      alertWinner();
      return true;
    }
    return false;
  }

  // Reset game
  const reset = () => {
    setDogPoints(0);
    setCatPoints(0);
    setIndex(0);
  }

  // alert winner
  const alertWinner = () => {
    const winner = dogPoints === catPoints ? "both" : (dogPoints > catPoints ? "Dog" : "Cat");
    alert(`${winner} won this round!`);
  }


  return (
    <div className='w-[60rem]'>
      <div className='flex mb-6'>
        <p className='flex-1 text-2xl font-bold'>{catPoints}</p>
        <p className='flex-1 text-2xl font-bold'>{dogPoints}</p>
      </div>
      <div className='mb-6 flex gap-12'>
        <button onClick={() => incrementCatPoints()} className='flex-1 h-96'>{cats[index]}</button>
        <button onClick={() => incrementDogPoints()} className='flex-1 h-96'>{dogs[index]}</button>
      </div>

      <div className='text-center'>
        <button onClick={() => reset()} className='py-2 px-6 border border-blue-200'>Reset</button>
      </div>
    </div>
  )
}
