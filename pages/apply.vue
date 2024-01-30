<script setup>

</script>

<template>
  <div class="apply">
    <Nav />
    <div class="content-wrap">
      <div class="content">
        <PageHeader>
          <h1>Want to contribute to bitcoin design?</h1>
          <p>We are excited to have more contributors working on and supporting open-source bitcoin design. The foundation supports highly motivated and vetted individuals with grants that enable them to dedicate more of their time on open-source bitcoin design, user research and associated areas. The foundation is a non-profit, and all applications are reviewed by the admins.</p>
          <Button 
            url="https://opencollective.com/bitcoin-design-foundation"
            size="big"
            rel="me"
          >Apply</Button>
        </PageHeader>
        <Paragraph>
          <h2 class="-h3">Working on a grant</h2>
          <p>Working on a grant means that you have full freedom to work on things you really enjoy. Work days and planning is managed by you. You get to decide on:</p>
          
          <ul>
            <li>Working hours</li>
            <li>Holidays</li>
            <li>Planning</li>
          </ul>

          <p>It means having a hyperfocus in one specific area and improving that area in the bitcoin ecosystem. Grantees are given a huge amount of trust and freedom. We trust that you will produce and work on the tasks that you have set out for yourself. With trust comes the responsibility to produce incredible work that you are proud of, and that contributes to the broader ecosystem. While this sounds like a bunch of fun (and it is), discipline and planning and grit are some of the core characteristics you’ll be tapping into.</p>
        </Paragraph>
        <Paragraph>
          <h2 class="-h3">Areas the foundation is looking to support</h2>
          <p>These are some of the areas where we observed a need and desire for more design contributions. You are more than welcome to share other ideas.</p>

          <ul>
            <li><b>UX best practices for cutting edge bitcoin technologies:</b> Interest for cutting-edge bitcoin technology, to help identify and document UX best practices for BOLT12, silent payments, async payments, LSP specs, and similar technologies.</li>
            <li><b>Merchant interactions:</b> Purchases, especially in-person ones, are extremely sensitive moments where technology and user interactions have to come together flawlessly.</li>
            <li><b>Ecash:</b> Fedimint and Cashu are two protocols with very active ecosystems of builders.</li>
            <li><b>Key projects and collaboration support:</b> Existing community collaborations and key projects to continue and deepen. The list includes Bitcoin Core App, Bitcoin UI Kit, Bitcoin Research Kit, Fedimint, Saving Satoshi, JAM and others.</li>
            <li><b>Accessibility:</b> How can we improve accessbility in bitcoin wallets? During our research on <a href="https://bitcoin.design/guide/designing-products/accessibility/" target="_blank">accessibility</a> in the bitcoin ecosystem, we <a href="https://github.com/BitcoinDesign/Meta/issues/516" target="_blank">found</a> that many wallets have very basic accessibility issues that prevent users with those needs from managing their bitcoin.</li>
          </ul>
        </Paragraph>
        <Paragraph>
          <h2 class="-h3">Grant review process</h2>
          <p>The grant selection process involves the evaluation of multiple criteria. The 3 criteria that proposals are evaluated with are the following:</p>

          <picture>
            <source
              media="(max-width: 639px)"
              srcset="/assets/images/grant-review-requirements-mobile.jpg 1x, /assets/images/grant-review-requirements-mobile@2x.jpg 2x"
            >
            <img
              src="/assets/images/grant-review-requirements.jpg"
              srcset="/assets/images/grant-review-requirements.jpg 1x, /assets/images/grant-review-requirements@2x.jpg 2x"
              width="900"
              height="180"
              loading="lazy"
              alt=""
            >
          </picture>
          
          <h3 class="-h4">1. Bitcoin</h3>
          <p>The project has a direct benefit to the bitcoin community and ecosystem. It should be in areas of improving the user experience of software and tools. These improvements might include design, research, content, code review as well as contributions to specific projects.</p>
          
          <h3 class="-h4">2. Open-source</h3>
          <p>The foundation supports open-source software and tools. Open-source referring to software for which the original source code is made freely available and may be redistributed and modified. Potential areas of interest include the Bitcoin Design Guide, the Bitcoin Design Community and project-specific work.</p>
          
          <h3 class="-h4">3. Open design</h3>
          <p>Funded projects and grantees are encouraged to work in public and to share their experience and journey with the community. We advise grantees to actively seek collaboration and mentor others who contribute to the project. Grantees are also encouraged to educate the community about the work they are doing.</p>
        </Paragraph>
        <Paragraph>
          <h2 class="-h3">Your proposal</h2>
          <p>A good proposal provides a full picture of the task or problem you want to address, why it is worthwhile, how you want to go about it, and why you are in a good position to tackle this task. It can be a 1-2 page text document and include visuals and videos and any other material you think helps communicate best. Proposals are often iterated on. Feel free to send us drafts for feedback.</p>
          <p>Once your application is submitted, we will review internally. We strive to keep this process simple and direct because we know your time is precious. We may come back with questions, or directly approve the proposal. In the latter case, we will reach out with the next steps for getting started and receiving the donation payouts.</p>
          <p>Should you have any questions before applying, feel free to jump into the <a href="http://bitcoin.design" target="_blank">Bitcoin Design Community</a> and ask in the <a href="https://discord.gg/V4xwxTBett" target="_blank">#foundation</a> channel.</p>
          <p>Grant applications: <a href="mailto:apply@bitcoindesignfoundation.org">apply@bitcoindesignfoundation.org</a></p>
          <p>Thank you.<br/>The Foundation team<br/>Christoph, Mo and Daniel</p>
        </Paragraph>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.apply {
  .content-wrap {
    padding-left: 20px;
    padding-right: 20px;
      
    .content {
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;
      @include r('gap', 35, 70);
    }
  }
}

</style>