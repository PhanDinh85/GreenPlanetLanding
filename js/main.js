document.addEventListener('DOMContentLoaded', function () {
    let currentStep = 1;
    const totalSteps = 4;

    function showStep(step) {
        document.querySelectorAll('.checkout').forEach((formStep, index) => {
            formStep.classList.toggle('hidden', index + 1 !== step);
        });
    }

    function nextStep(step) {
        if (step < totalSteps) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function prevStep(step) {
        if (step > 1) {
            currentStep--;
            showStep(currentStep);
        }
    }

    // Gắn sự kiện cho nút Next của từng form
    document.getElementById('nextDonationAmountCard').addEventListener('click', function () {
        event.preventDefault();
        nextStep(1);
    });
    document.getElementById('nextDonorInformationCard').addEventListener('click', function () {
        event.preventDefault();
        nextStep(2);
    });
    document.getElementById('cardConnectDonateNow').addEventListener('click', function () {
        event.preventDefault();
        nextStep(3);
    });

    // Gắn sự kiện cho nút Previous của từng form
    document.getElementById('prevDonorInformationCard').addEventListener('click', function () {
        event.preventDefault();
        prevStep(2);
    });
    document.getElementById('prevPaymentCard').addEventListener('click', function () {
        event.preventDefault();
        prevStep(3);
    });

    // Hiển thị form đầu tiên khi tải trang
    showStep(currentStep)

    document.querySelectorAll('.donation-amount-label').forEach(function (div) {
        div.addEventListener('click', function () {
            // Loại bỏ lớp active khỏi tất cả các thẻ div
            document.querySelectorAll('.donation-amount-label').forEach(function (el) {
                el.classList.remove('bg-spruce', 'text-white');
                el.classList.add('bg-gray-200', 'text-black');
            });

            // Thêm lớp active vào thẻ div được click
            div.classList.remove('bg-gray-200', 'text-black');
            div.classList.add('bg-spruce', 'text-white');
        });
    });
});

