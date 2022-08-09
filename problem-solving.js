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