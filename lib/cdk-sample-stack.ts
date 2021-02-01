import sns = require('@aws-cdk/aws-sns');
import subs = require('@aws-cdk/aws-sns-subscriptions');
import sqs = require('@aws-cdk/aws-sqs');
import cdk = require('@aws-cdk/core');

export class CdkSampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const queue = new sqs.Queue(this, 'CdkSampleQueue', {
      visibilityTimeout: cdk.Duration.seconds(300);
    });

    const topic = new sns.Topic(this, 'CdkSampleTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
