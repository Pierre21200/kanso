import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData, fetchTimers } from '@/app/lib/data';
import { Card } from './card';

// const iconMap = {
//   collected: BanknotesIcon,
//   customers: UserGroupIcon,
//   pending: ClockIcon,
//   invoices: InboxIcon,
// };




export default async function CardTimer() {

  

  const timers = await fetchTimers()






  const timerComponents = timers.map((timer) => (
    <Card id={timer.id} key={timer.id} value={timer.value} title={timer.name}/>
  ));


  return (
    <>
      {timerComponents}
    </>
  );
}

// export function Card({
//   title,
//   value,
// }: {
//   title: string;
//   value: number | string;
// }) {

//   return (
//     <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
//       <div className="flex p-4">
//         <h3 className="ml-2 text-sm font-medium">{title}</h3>
//       </div>
//       <p
//         className={`${lusitana.className}
//           truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
//       >
        
//         {value}
//       </p>
//     </div>
//   );
// }