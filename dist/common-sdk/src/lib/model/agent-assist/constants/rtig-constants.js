"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RTIGConstants = void 0;
/**
 * Constants for RTIG
 */
exports.RTIGConstants = {
    clientId: 'Naia@inContact Inc.',
    // TODO: consider changing this format when localization will be applied
    dateFormat: 'MM/dd/yyyy HH:mm:ss',
    defaultIanaTimezone: 'utc',
    // TODO: improve this later
    acdPaths: {
        tokenExchange: 'Token',
        // TODO: enhance, use it in both platforms
        whoAmIPath: 'Token/WhoAmI',
        serverTime: 'services/v3.0/server-time',
    },
    cxonePaths: {
        permissions: 'authorization/v1/role/permissions',
        tokenExchange: 'public/authentication/v1/token',
        tokenRefresh: 'public/authentication/v1/refresh',
    },
    metrics: [
        {
            guid: '142b1843-fd24-4718-a074-067984dbad63',
            tag: 'speechVelocity',
            type: 'csat',
            friendly_name: 'Speech Velocity',
            image_src: 'speech-velocity',
            is_sentiment_score: false,
        },
        {
            guid: '867e5e2b-b85f-486b-b715-cea7234ffb3c',
            tag: 'activeListening',
            type: 'csat',
            friendly_name: 'Active Listening',
            image_src: 'active-listening',
            is_sentiment_score: false,
        },
        {
            guid: '7e30c59a-f91f-4326-96d1-276dd7644f9c',
            tag: 'beEmpathetic',
            type: 'csat',
            friendly_name: 'Be Empathetic',
            image_src: 'be-empathetic',
            is_sentiment_score: false,
        },
        {
            guid: '59563b8c-35cf-4d90-8620-15cd0c5e6dc1',
            tag: 'interruption',
            type: 'csat',
            friendly_name: 'Interruption',
            image_src: 'interruption',
            is_sentiment_score: false,
        },
        {
            guid: '8e6542e7-09e3-4350-89a0-d4d2cd733fa8',
            tag: 'demonstrateOwnership',
            type: 'csat',
            friendly_name: 'Demonstrate Ownership',
            image_src: 'demonstrate-ownership',
            is_sentiment_score: false,
        },
        {
            guid: '70daadef-5d0a-4ee4-987e-900616ecef25',
            tag: 'buildRapport',
            type: 'csat',
            friendly_name: 'Build Rapport',
            image_src: 'build-rapport',
            is_sentiment_score: false,
        },
        {
            guid: 'fa1f40a1-e7d7-4788-ad16-4b125571bacb',
            tag: 'setExpectations',
            type: 'csat',
            friendly_name: 'Set Expectations',
            image_src: 'set-expectations',
            is_sentiment_score: false,
        },
        {
            guid: '49588d44-ce6b-4129-a20c-dbd4ad752688',
            tag: 'effectiveQuestioning',
            type: 'csat',
            friendly_name: 'Effective Questioning',
            image_src: 'effective-questioning',
            is_sentiment_score: false,
        },
        {
            guid: '39e68dd2-8785-4bec-8586-c1d85f707ffe',
            tag: 'promoteSelfService',
            type: 'csat',
            friendly_name: 'Promote Self-Service',
            image_src: 'promote-self-service',
            is_sentiment_score: false,
        },
        {
            guid: '6ca702e9-2996-4b55-b572-741a39286f13',
            tag: 'acknowledgeLoyalty',
            type: 'csat',
            friendly_name: 'Acknowledge Loyalty',
            image_src: 'acknowledge-loyalty',
            is_sentiment_score: false,
        },
        {
            guid: 'd32ef5e0-708c-40a4-bd4b-f391d36ecd1b',
            tag: 'inappropriateAction',
            type: 'csat',
            friendly_name: 'Inappropriate Action',
            image_src: 'inappropriate-action',
            is_sentiment_score: false,
        },
        {
            guid: 'f090fad6-f869-4a87-a137-455160de6968',
            tag: 'sentiment',
            type: 'csat',
            friendly_name: 'OverallSentiment',
            image_src: 'meh',
            is_sentiment_score: true,
        },
        {
            guid: 'sales1234-1ffb-4397-93c5-a3335231e5f1',
            tag: 'acknowledgeRequest',
            type: 'sales',
            friendly_name: 'Acknowledge Request',
            image_src: 'acknowledge-request',
            is_sentiment_score: false,
        },
        {
            guid: 'sales1234-1ffb-4397-93c5-a3335231e5f2',
            tag: 'askForTheSale',
            type: 'sales',
            friendly_name: 'Ask for the Sale',
            image_src: 'ask-for-the-sale',
            is_sentiment_score: false,
        },
        {
            guid: 'sales1234-1ffb-4397-93c5-a3335231e5f3',
            tag: 'demonstrateEmpathy',
            type: 'sales',
            friendly_name: 'Demonstrates Empathy',
            image_src: 'demonstrate-empathy',
            is_sentiment_score: false,
        },
        {
            guid: '54af2ec0-5e34-494b-ae1d-144703f35691',
            tag: 'likelihoodToBuy',
            type: 'sales',
            friendly_name: 'Likelihood to Buy',
            image_src: 'likelihood-to-buy',
            is_sentiment_score: true,
        },
        {
            guid: 'sales1234-1ffb-4397-93c5-a3335231e5f5',
            tag: 'makeAConnection',
            type: 'sales',
            friendly_name: 'Make a Connection',
            image_src: 'make-a-connection',
            is_sentiment_score: false,
        },
        {
            guid: 'sales1234-1ffb-4397-93c5-a3335231e5f6',
            tag: 'orderConfirmation',
            type: 'sales',
            friendly_name: 'Confirmed Order',
            image_src: 'confirmed-sale',
            is_sentiment_score: false,
        },
        {
            guid: 'sales1234-1ffb-4397-93c5-a3335231e5f7',
            tag: 'overcomeObjections',
            type: 'sales',
            friendly_name: 'Overcome Objections',
            image_src: 'handle-objections',
            is_sentiment_score: false,
        },
        {
            guid: 'sales1234-1ffb-4397-93c5-a3335231e5f8',
            tag: 'presumptiveSelling',
            type: 'sales',
            friendly_name: 'Presumptive Selling',
            image_src: 'presumptive-selling',
            is_sentiment_score: false,
        },
        {
            guid: 'sales1234-1ffb-4397-93c5-a3335231e5f9',
            tag: 'uncoverNeeds',
            type: 'sales',
            friendly_name: 'Uncover Needs',
            image_src: 'uncover-needs',
            is_sentiment_score: false,
        }
    ],
    rangesOfMetric: [{
            min: -100,
            max: 0,
            color: '#E3E3E3',
            label: 'no score',
            severity: 'none',
            imageSrc: 'meh',
        },
        {
            min: 0,
            max: 30,
            color: '#FF2B53',
            label: 'bad score',
            severity: 'high',
            imageSrc: 'sad',
        },
        {
            min: 30,
            max: 70,
            color: '#FFBA1F',
            label: 'neutral score',
            severity: 'medium',
            imageSrc: 'meh',
        },
        {
            min: 70,
            max: 100,
            color: '#36C700',
            label: 'very good score',
            severity: 'low',
            imageSrc: 'smile',
        }],
    disableColor: '#E3E3E3',
};
//# sourceMappingURL=rtig-constants.js.map