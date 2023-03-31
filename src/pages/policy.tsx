import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

export default function privacyPolicy() {
  return (
    <main className="w-screen h-screen bg-black overflow-auto">
      <Head>
        <title>Privacy policy</title>
      </Head>
      <div className="flex flex-col pl-20 pt-12 h-full">
        <Link href="/" className="font-['Open Sans'] text-white text-base font-bold">
          BALANCER
        </Link>
        <div className="mt-10 pr-10">
          <h2 className="text-white text-xl font-bold"> What information we collect about you </h2>
          <p className="text-white mt-4">We collect information about you when you provide it to us, when you use our Services, and when other sources provide it to us, as further described below.</p>
          <p className="text-white mt-4 font-bold">Information you provide to us</p>
          <p className="text-white mt-4">We collect information about you when you input it into the Services or otherwise provide it directly to us.</p>
          <p className="text-white mt-4">
            <b>Account and Profile Information:</b>
            {' '}
            We collect information about you when you register for an account, create or modify your profile, set preferences, sign-up for or make purchases through the Services. For example, you provide your contact information and, in some cases, billing information, when you register for the Services. You also have the option of adding a display name, profile photo, job title, and other details to your profile information to be displayed in our Services.  We keep track of your preferences when you select settings within the Services.
          </p>
          <p className="text-white mt-4">
            <b>Content you provide through our products:</b>
            {' '}
            The Services include the Atlassian products you use, where we collect and store content that you post, send, receive and share. This content includes any information about you that you may choose to include. Examples of content we collect and store include: the summary and description added to a Jira issue, the pages you create in Confluence, the name of a Trello board, your repositories and pull requests in Bitbucket, information regarding an incident in Statuspage or Opsgenie, any stories you name in Jira Align, and any feedback you provide to us. Content also includes the files and links you upload to the Services. If you use a server or data center version of the Services, we do not host, store, transmit, receive or collect information about you (including your content), except in limited cases, where permitted by your administrator: we collect feedback you provide directly to us through the product and; we collect content using analytics techniques that hash, filter or otherwise scrub the information to exclude information that might identify you or your organization; and we collect clickstream data about how you interact with and use features in the Services. Server and data center administrators can disable our collection of this information from the Services via the administrator settings or prevent this information from being shared with us by blocking transmission at the local network level.
            {' '}
          </p>
          <p className="text-white mt-4">
            <b>Content you provide through our websites:</b>
            {' '}
            The Services also include our websites owned or operated by us. We collect other content that you submit to these websites, which include social media or social networking websites operated by us. For example, you provide content to us when you provide feedback or when you participate in any interactive features, surveys, contests, promotions, sweepstakes, activities or events.
            {' '}
          </p>
          <p className="text-white mt-4">
            <b>Information you provide through our support channels:</b>
            The Services also include our customer support, where you may choose to submit information regarding a problem you are experiencing with a Service.  Whether you designate yourself as a technical contact, open a support ticket, speak to one of our representatives directly or otherwise engage with our support team, you will be asked to provide contact information, a summary of the problem you are experiencing, and any other documentation, screenshots or information that would be helpful in resolving the issue.
          </p>
          <p className="text-white mt-4">
            <b>Payment Information:</b>
            {' '}
            We collect payment and billing information when you register for certain paid Services.  For example, we ask you to designate a billing representative, including name and contact information, upon registration.  You might also provide payment information, such as payment card details, which we collect via secure payment processing services.
          </p>
          <h2 className="text-white text-xl mt-6 font-bold">Information we collect automatically when you use the Services</h2>
          <p className="text-white mt-4">We collect information about you when you use our Services, including browsing our websites and taking certain actions within the Services.</p>
          <p className="text-white mt-4">
            <b>Your use of the Services:</b>
            {' '}
            We keep track of certain information about you when you visit and interact with any of our Services. This information includes the features you use; the links you click on; the type, size and filenames of attachments you upload to the Services; frequently used search terms; your team’s Jira Align story progress; and how you interact with others on the Services.  We also collect information about the teams and people you work with and how you work with them, like who you collaborate with and communicate with most frequently.  If you use a server or data center version of the Services, the information we collect about your use of the Services is limited to clickstream data about how you interact with and use features in the Services, in addition to content-related information described in Content you provide through our products, above.  Server and data center administrators can disable our collection of this information from the Services via the administrator settings or prevent this information from being shared with us by blocking transmission at the local network level.
            {' '}
          </p>
        </div>
      </div>
    </main>
  );
}
