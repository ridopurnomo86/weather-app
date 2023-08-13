<template>
    <footer class="footer-container">
        <p class="title-text">
            created by
            <span>
                <a class="bold-underline" href="https://github.com/ridopurnomo86" target="__blank"> ridopurnomo86 </a>
            </span>
            - devChallenges.io
        </p>
    </footer>
</template>

<style scoped>
.footer-container {
    width: 100%;
    display: flex;
    top: 40px;
    position: relative;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-block: 2rem;
}

.title-text {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: rgba(130, 130, 130, 1);
}

.bold-underline {
    font-weight: 700;
    text-decoration: underline;
    color: rgba(130, 130, 130, 1);
}
</style>
