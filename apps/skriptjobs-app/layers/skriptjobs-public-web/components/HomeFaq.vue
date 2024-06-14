<template>
  <!-- FAQ -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="grid md:grid-cols-5 gap-10">
      <div class="md:col-span-2">
        <div class="max-w-xs">
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Frequently<br>asked questions
          </h2>
          <p class="mt-1 hidden md:block text-gray-600 dark:text-gray-400">
            Answers to the most frequently asked questions.
          </p>
        </div>
      </div>
      <!-- End Col -->

      <div class="md:col-span-3">
        <!-- Accordion -->
        <div class="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
          <div id="hs-basic-with-title-and-arrow-stretched-heading-one" class="hs-accordion pb-3 active">
            <button aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Can I cancel at anytime?
              <svg class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6" /></svg>
              <svg class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6" /></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
              <p class="text-gray-600 dark:text-gray-400">
                Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
              </p>
            </div>
          </div>

          <div id="hs-basic-with-title-and-arrow-stretched-heading-two" class="hs-accordion pt-6 pb-3">
            <button aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two" class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              My team has credits. How do we use them?
              <svg class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6" /></svg>
              <svg class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6" /></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
              <p class="text-gray-600 dark:text-gray-400">
                Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
              </p>
            </div>
          </div>

          <div id="hs-basic-with-title-and-arrow-stretched-heading-three" class="hs-accordion pt-6 pb-3">
            <button aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three" class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              How does Preline's pricing work?
              <svg class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6" /></svg>
              <svg class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6" /></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
              <p class="text-gray-600 dark:text-gray-400">
                Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
              </p>
            </div>
          </div>

          <div id="hs-basic-with-title-and-arrow-stretched-heading-four" class="hs-accordion pt-6 pb-3">
            <button aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four" class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              How secure is Preline?
              <svg class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6" /></svg>
              <svg class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6" /></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
              <p class="text-gray-600 dark:text-gray-400">
                Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
              </p>
            </div>
          </div>

          <div id="hs-basic-with-title-and-arrow-stretched-heading-five" class="hs-accordion pt-6 pb-3">
            <button aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five" class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              How do I get access to a theme I purchased?
              <svg class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6" /></svg>
              <svg class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6" /></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
              <p class="text-gray-600 dark:text-gray-400">
                If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
              </p>
            </div>
          </div>

          <div id="hs-basic-with-title-and-arrow-stretched-heading-six" class="hs-accordion pt-6 pb-3">
            <button aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six" class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Upgrade License Type
              <svg class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6" /></svg>
              <svg class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6" /></svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
              <p class="text-gray-600 dark:text-gray-400">
                There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
              </p>
            </div>
          </div>
        </div>
      <!-- End Accordion -->
      </div>
    <!-- End Col -->
    </div>
  <!-- End Grid -->
  </div>
<!-- End FAQ -->
</template>
