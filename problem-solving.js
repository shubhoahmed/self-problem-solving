// Problem-5
/*
একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

**/

let arraryNumbers = [2, 4, -25, 45, 21, 54, 85, 32, -85, 14, 31, 54];
function onlyPositive(numbers) {
    const posittiveElement = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        if (elements >= 0) {
            posittiveElement.push(elements);
        }
        else {
            break;
        }
    }
    return posittiveElement;
}
const positiveOutput = onlyPositive(arraryNumbers);
console.log(positiveOutput);

//Problem - 4
/*
 একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
 */
function bestFriend(name) {
    let bigName = friendName[0];
    for (let i = 0; i < friendName.length; i++) {
        const friendsName = friendName[i];
        if (friendsName > friendName) {
            bigName = friendsName;
        }
    }
    return bigName;

}
const friendName = ['Sojib', 'Alamin', 'Imran', 'Tuhin', 'Hridoy', 'Abu Nahid', 'Alfaz Uddin', 'Shafiq Ahmed Bhuiyan'];
const largeNameFriend = bestFriend(friendName);
console.log(largeNameFriend);

//Problem - 3
/*
 ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

উত্তর হিসেবে সংখ্যা রিটার্ন করবে।  
 */
function pageRequirments(firstBook, secondBook, thirdBook) {

    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    const firstBookPageQuantity = firstBookPage * firstBook;
    const secondBookPageQuantity = secondBookPage * secondBook;
    const thirdBookPageQuantity = thirdBookPage * thirdBook;

    totalPage = firstBookPageQuantity + secondBookPageQuantity + thirdBookPageQuantity;

    return totalPage;
}
const result = pageRequirments(4, 8, 5);
console.log('Total Page Requirments is:', result, 'pages.');

//Problem-2
/*
একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
*/
function centimeterToMeter(centimeters) {
    const meter = centimeters / 100;
    return meter;
}
let centimeter = 500;
const convertedMeter = centimeterToMeter(centimeter);
console.log('Converted Result:', convertedMeter, 'Meter.');

//Problem-1
/*
সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 
*/
function feetToInch(feet) {
    const inche = feet * 12;
    return inche;
}
let feets = 1241;
const convertedInche = feetToInch(feets);
console.log('Converted Result:', convertedInche, 'Inches.');
