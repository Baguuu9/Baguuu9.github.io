const lockedMessage = document.getElementById('lockedMessage');
const unlockDate = document.getElementById('unlockDate');
const hiddenContent = document.getElementById('hiddenContent');

const today = new Date();
const unlockDateTarget = new Date('2023-11-26');

const isUnlocked = today.getFullYear() >= unlockDateTarget.getFullYear() &&
  today.getMonth() >= unlockDateTarget.getMonth() &&
  today.getDate() >= unlockDateTarget.getDate();

if (isUnlocked) {
  lockedMessage.style.display = 'none';
  unlockDate.style.display = 'none';
  hiddenContent.style.display = 'block';
}
