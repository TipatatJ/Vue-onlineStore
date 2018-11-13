<template>
    <div>
        <div class="container">
            <div class="contact-info row">
                <div class="contact-item">
                    <div class="contact-item-icon">
                        <i class="fas fa-map-pin"></i>
                    </div>
                    <h2 class="contact-item-title">address</h2>
                    <p class="contact-item-text">高雄市前鎮區新光路</p>
                </div>

                <div class="contact-item">
                    <div class="contact-item-icon">
                        <i class="fas fa-headphones-alt"></i>
                    </div>
                    <h2 class="contact-item-title">support</h2>
                    <p class="contact-item-text">
                        <span>
                            <i class="fas fa-phone"></i>
                        </span>
                        +123 456 789
                    </p>
                    <p class="contact-item-text">
                        <span>
                            <i class="fas fa-envelope"></i>
                        </span>
                        email@email.com
                    </p>
                </div>

                <div class="contact-item">
                    <div class="contact-item-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h2 class="contact-item-title">work time</h2>
                    <p class="contact-item-text">monday - friday 8.00am - 20.00pm</p>
                    <p class="contact-item-text">saturdya - sunday 9.00am - 22.00pm</p>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="sass">

.contact-info
    justify-content: space-around

.contact-item-icon
    font-size: 3rem
    color: #f2b450

.contact-item-title
    text-transform: uppercase
    margin: 0.5rem 0
    letter-spacing: 0.25rem
    font-style: italic

.contact-item-text
    font-size: 1rem
    text-transform: uppercase
    color: #a9b2ac
</style>
