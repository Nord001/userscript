// ==UserScript==
// @name       Caring Online
// @namespace  http://karunaconsulting.com
// @version    0.1
// @description  Caring Online Updates
// @match      http://www.caringonline.com/*
// @require    http://code.jquery.com/jquery-latest.min.js
// @copyright  2013, Kirill Miniaev
// ==/UserScript==

/*::::::::::::::PLUGINS:::::::::::::::*/
//Get contents of full elt jQuery
jQuery.fn.outerHTML = function() {
  return jQuery('<li />').append(this.eq(0).clone()).html();
};

function hasNumbers(t)
{
return /\d/.test(t);
}
/*::::::::::::::PLUGINS:::::::::::::::*/

(function ($) {
	$('a[href$="skype:aplaceofhope.com?call"]').remove();
	$('#top').append('<img id="callAPOH" src="http://www.caringonline.com/images/CallAPOH.png" width="228" height="77" alt="Call Now to Speak with An Eating Disorder Specialist. 1-800-222-1111" />');

	if (document.location.href == "http://www.caringonline.com/eatdis/center.htm" || document.location.href == "http://www.caringonline.com/eatdis/treatment.htm" || document.location.href == "http://www.caringonline.com/eatdis/support.htm") {
		$('#content').append('<img id="callAPOHBody" src="http://www.caringonline.com/images/CallAPOH.png" width="228" height="77" alt="Call Now to Speak with An Eating Disorder Specialist. 1-800-222-1111" />');
	}

	if (document.location.href == "http://www.caringonline.com/eatdis/support.htm") {
	$('#content h2').after('<h3 id="featuredClinic">Featured Clinic:</h3><table id="featuredClinicTable" border="1" cellspacing="0"><tbody><tr><th class="col1">Name:</th><th class="col2">Treatment:</th><th class="col3">Patient Types Served:</th><th class="col4">Therapies:</th><th class="col5">Insurance:</th></tr><tr><td class="col1"><a href="http://www.aplaceofhope.com/" target="_blank"><img src="http://www.eatingdisorderhope.com/wp-content/uploads/2013/04/a-place-of-hope-logo-small.jpg"></a><br/><a href="http://www.aplaceofhope.com/" target="_blank">A Place of Hope</a><br/>547 Dayton Street<br/>Edmonds, WA 98020<br/>Phone: 888-771-5166</td><td class="col2">Residential, Inpatient, Outpatient</td><td class="col3">Adults, adolescents, children: men and women</td><td class="col4">Couples Therapy, Family Therapy, Group Therapy, DBT, CBT, Nutritional Counseling, Prescription Medication, Support Groups, Individual Therapy, Medical Care</td><td class="col5">Accepted, in-network with multiple providers. Medicare / Medicaid Accepted: No</td></tr></tbody></table>');
	}

	if (document.location.href == "http://www.caringonline.com/eatdis/treatment.htm") {
	$('#content p:eq(4)').after('<h3 id="featuredClinic">Featured Clinic:</h3><table id="featuredClinicTable" border="1" cellspacing="0"><tbody><tr><th class="col1">Name:</th><th class="col2">Treatment:</th><th class="col3">Patient Types Served:</th><th class="col4">Therapies:</th><th class="col5">Insurance:</th></tr><tr><td class="col1"><a href="http://www.aplaceofhope.com/" target="_blank"><img src="http://www.eatingdisorderhope.com/wp-content/uploads/2013/04/a-place-of-hope-logo-small.jpg"></a><br/><a href="http://www.aplaceofhope.com/" target="_blank">A Place of Hope</a><br/>547 Dayton Street<br/>Edmonds, WA 98020<br/>Phone: 888-771-5166</td><td class="col2">Residential, Inpatient, Outpatient</td><td class="col3">Adults, adolescents, children: men and women</td><td class="col4">Couples Therapy, Family Therapy, Group Therapy, DBT, CBT, Nutritional Counseling, Prescription Medication, Support Groups, Individual Therapy, Medical Care</td><td class="col5">Accepted, in-network with multiple providers. Medicare / Medicaid Accepted: No</td></tr></tbody></table>');
	}

	if (document.location.href == "http://www.caringonline.com/eatdis/center.htm") {
		$('h2').after('<div class="format_text"><p>For 25 years<a href="http://www.aplaceofhope.com/" target="_blank"> The Center for Counseling &amp; Health Resources, Inc</a>. has been treating individuals with eating disorders.</p><p>Our unique whole-person approach to counseling helps individuals to see permanent success over an eating disorder. Our emphasis is on Emotional Balance, Intellectual Discovery, Relational Healing, Physical Wellness, Nutritional Support, and Spiritual Renewal.</p><p>We offer a World Renown Specialized Intensive Treatment Program that lasts 4-12 weeks with a Transitional Care Program available after your Intensive Treatment. Unlike many other treatment programs, most of your time is spent in personalized individual counseling instead of group sessions.</p><p>The Center is known for being A Place of Hope. Go to our website and read the numerous testimonials of our clients. Located a few miles outside of Seattle, Edmonds is a beautiful beach town with majestic views. Rather you like the city life or the great outdoors there is plenty to enjoy during your time in the great Pacific Northwest.</p><p>&nbsp;</p><h2>30-Day (4-week) Intensive Treatment Program For Anorexia Help, Bulimia Help and Binge Eating Help, and other Food-Related Disorders</h2><p><img class="alignright" alt="" src="http://www.eatingdisorderhope.com/img/PlaceofHope/twitter-bg-apoh-8-30-10med.jpg" width="136" height="550">(Available for 60 &amp; 90 days based upon client needs, we also have a longer term transitional care program)</p><p>Our program begins Comprehensive Assessment that will evaluate the whole-person, including the following areas:</p><ul><li>Chemical dependency assessment</li><li>Behavior Addictions</li><li>Complete Mental Health Assessment</li><li>Vocational &amp; Career Needs</li><li>Family Functioning &amp; Issues</li><li>Health of Social Relationships</li><li>Complete Physical Health &amp; Fitness Assessment</li><li>Nutritional Counseling</li><li>Body Image Reconstruction and Restoration</li><li>Fitness Reassessment and Coaching</li><li>Relapse Prevention Strategies</li><li>Family Re-Integration Skills</li><li>Massage Therapy ( Specialized for Eating &amp; Body Issues)</li><li>Career and Life Purpose Coaching (Career Testing Available)</li><li>Personal Primary Care and Recovery Manager</li><li>Transportation to and from airports -<br>Transportation provided to all events</li><li>Nourishing meal times with meals designed by a registered dietician</li><li>Pre-care appointments before start of intensive</li><li>Specialized Art Class</li><li>Expressive Class (music)</li><li>Weekly Nutrition Education Class</li><li>Weekly Food Shopping Classes / Assisted Grocery Shopping</li><li>Weekly Cooking Classes</li><li>Mindful Walking Activities</li><li>Eating Disorder Recovery Class</li><li>Body Image and Self-Esteem Class</li><li>Special “Living Well” Series</li><li>Family Program For Loved Ones</li><li>Complete Spectrum of Natural Health Care</li><li>Complete Psychological testing and assessments<ul type="circle"><li>Evaluation by physician</li><li>Psychological/Social History</li><li>Eating Disorder Needs Assessment Survey</li><li>Diagnostic Survey for Eating Disorders</li><li>Million Behavioral Medicine Diagnosis, when age appropriate</li><li>Trauma Assessment</li><li>Complete Mental Health Assessment</li><li>Other testing purposely not listed here</li></ul></li><li>Complete physiological testing and assessments<ul type="circle"><li>Assessment and Nutrition Plan by Dietician</li><li>Medical Exam by Physician</li><li>Health Appraisal Analysis</li><li>Various specialized blood tests (CMP14, CBC, TSH, 25OHD3, Lipid Panel, HgbAIC), complete blood count with electrolytes, automated chemical profile</li><li>Complete medical work up and exam performed by our medical team</li><li>Medication reassessment (if you are on medications, such as anti-depressants or anti-anxiety medications, an assessment of effectiveness and new prescriptions may be provided)</li></ul></li><li>Bioimpedance (BIA) test to evaluate ongoing dehydration and metabolism (a simple, non-evasive test requiring no blood work or discomfort)</li><li>Medical Monitoring including multiple daily checks of “vital signs” when needed</li><li>EKG’s as indicated by medical personnel</li><li>Possibly various types of G.I. testing (For Digestive Issues)</li><li>Possibly various types of female (or male) hormonal profiles</li><li>Eating Disorder assessments including food history, diet analysis, nutrient evaluation, dietary guidelines, menu planning, and food selection/planning</li><li>Fitness assessment by Certified Personal Trainer, Registered Nurse to measure baseline of current physical condition</li><li>Access to fitness facilities and fitness classes (when exercise type and duration approved by the team leader/physician)</li><li>Regular sessions with Eating Disorder Body Image Specialist and Certified Fitness Trainer</li><li>Nutritional Guidance with Dietician</li><li>Personal involvement, direction, program management, oversight, and supervision by registered dietician</li><li>Initial supply of Metabolic Recovery</li><li>Daily journal for assignments</li><li>Weekly fitness reassessment and coaching, when appropriate</li><li>Specialized massage therapy for those with body image issues</li><li>Supportive Eating Program</li></ul><p>&nbsp;</p><h2>Men’s Program for Eating Disorders - Anorexia Help, Bulimia Help, Binge Eating Help, and other Eating Disorders</h2><p><img class="alignright" alt="" src="http://www.eatingdisorderhope.com/img/male-happy_01.jpg" width="150" height="118" border="0">Some programs for eating disorders admit only women, especially those for anorexia recovery and bulimia recovery. That is not the case here at The Center where we have a program just for men that incorporates treatment specific to their unique needs when suffering with anorexia nervosa, bulimia nervosa or binge eating disorder. So, if you are a male with an eating disorder, there is Hope for You!</p><p>&nbsp;</p><div align="center"><h3>Books by Dr. Gregory Jantz ~ Founder of A Place of Hope</h3><p style="text-align: center;"><img class="aligncenter" style="border: 0pt none;" alt="" src="http://www.eatingdisorderhope.com/img/jantz_books.jpg" width="370" height="314" border="0"><strong><a title="Purchase books by Dr. Jantz" href="http://go.clickmeter.com/ttkk/" target="_blank" rel="external nofollow" class="ext-link">Buy Your Copy Here!</a></strong></p></div><p>&nbsp;</p><h2>Who We Are</h2><p>Twenty-five years ago, eating disorder specialist Dr. Gregg Jantz had a vision of Hope. Trained in counseling, he looked at the<img class="alignright" alt="Dr. Jantz talks about recovery" src="http://www.eatingdisorderhope.com/img/jantz_speaker.jpg" width="129" height="101">treatment options available and realized something was missing. In all areas of need from eating disorders to depression hurting people went to a doctor, a psychiatrist, a counselor, and a pastor, going from place to place looking for Hope, help and healing from their pain. At each junction, they received help for a piece of the puzzle, but that puzzle often remained unsolved.</p><p>Instead of settling for fractured care, Dr. Jantz created The Center, known as “a place of hope”. leaders in whole-person care where people find comprehensive, coordinated care from a treatment team using a whole-person model “inspired healthcare” addressing medical, physical, psychological, emotional, nutritional, fitness and spiritual factors involved in recovery.</p><p>&nbsp;</p><h2>Adolescent Eating Disorder Program For Anorexia Help, Bulimia Help and Binge Eating Help, and other Eating Disorders</h2><p>Elements of the above-referenced programs for eating disorders are tailored to the unique needs of anorexics, bulimics and compulsive overeaters in our Adolescent Eating Disorder Program. This may include help for parents and families as well whose loved ones are suffering with eating disorders.</p><p>For adolescents and older teens who need assistance in continuing their academic studies while at The Center for eating disorders recovering from anorexia, bulimia or binge eating, we can arrange for a state-certified teacher as an academic tutor. Time for studying will be worked into the program accordingly.</p><p>&nbsp;</p><h2>Phone Follow-Up For Anorexia Help, Bulimia Help and Binge Eating Help, and other Eating Disorders</h2><p>Upon completion of each recovery program for eating disorders, weekly telephone sessions for 3-6 months are recommended. This is beneficial to recovery and relapse prevention of eating disorders, solidifying recovery skills and providing a venue to discuss ongoing challenges and successes with anorexia recovery, bulimia recovery, and compulsive overeating recovery.</p><h2>Give yourself Hope today. Help is within reach at The Center a place of Hope for thousands over the past 24 years.</h2><p><img class="alignright" alt="Christian woman with biblical scripture" src="http://www.eatingdisorderhope.com/img/woman_jeremiah_sm.jpg" width="165" height="225" border="0">You won’t find cookie-cutter solutions or canned responses at The Center. Each person is unique and we take the time to get to know you personally, even before you arrive for your Intensive Treatment Program for Eating Disorders. That means understanding your situation and fully addressing questions or concerns so you can make the decision for for anorexia recovery, bulimia recovery or overeating recovery. We promise to provide an atmosphere of respect and trust in all interactions with you, from the first phone call to the heartfelt good-byes when you return home.</p><p>&nbsp;</p><h2>Lodging / Housing</h2><p>We have a variety of excellent housing options available for your time with us. There is No additional costs for lodging. Housekeeping / Laundry / Linen Service Provided. Fully Equipped Kitchens.</p><p>&nbsp;</p><h2>Treatment Costs</h2><p>Charges are a per diem rate for Day Treatment. We will work with your insurance plans when possible. We are not a Medicare or Medicaid provider. Our utilization department will work directly with you and your insurance. We will attempt to pre-certify treatment when appropriate. It is a good idea to consult your insurance company directly prior to admission. We find that individuals and families that advocate with their insurance companies many times have the best success. For more info go to: Financing Programs.</p><p>&nbsp;</p><h2>Free Initial Consultation for Eating Disorders</h2><p>We would like to spend time discussing this information with you and answering your questions about our treatment program for eating disorders. If interested in this program including current program rates<strong> please fill out the form below </strong>or call toll-free 1-888-771-5166 or 1-425-771-5166.</p><p>&nbsp;</p><h2>Why Choose Us?</h2><h4>7 Ways Our Approach is Unique</h4><ol><li>We believe and understand that Hope is available for every person. In 24 years of treatment, we’ve seen countless miracles of God’s grace, manifested through our whole-person care for addictions and other issues.</li><li>We have assembled a comprehensive recovery team of psychologists, licensed counselors, a certified eating disorder specialist, medical personnel, board certified psychiatrist, dieticians, licensed social workers, depression experts, licensed marriage and family therapists, certified chemical dependency professionals, massage therapists, RN, fitness trainer and various specialists. Our team represents the very best in treatment professionals who are called into the ministry of Hope and Healing.</li><li>The whole-person approach to treatment integrates all aspects of a person’s life:<ul><li>Emotional well-being</li><li>Physical health</li><li>Spiritual peace</li><li>Relational happiness</li><li>Intellectual growth</li><li>Nutritional vitality</li></ul></li><li>Our life-affirming treatment for addictions and other issues has been endorsed by many experts, including Dr. Abram Hoffer, M.D., Ph.D., one of the world’s foremost psychiatrists. Read Dr. Hoffer’s Review of our whole-person approach in the<em>Journal of Orthomolecular Medicine</em>.</li><li>We understand addiction<em>and</em>recovery. Our Hope-filled treatment recovery programs work with some of the most challenging issues anorexia, bulimia, compulsive overeating, binge eating, obesity, bi-polar disorder, and addictions of all types.</li><li>At the heart of our whole-person treatment philosophy is to resolve root issues that create and perpetuate unhappiness and unhealthy life patterns.</li><li>Those who have been helped through The Center’s whole-person treatment approach for addictions and other issues are willing to share their experiences. Read their testimonials or request to speak with someone yourself.<br></li></ol><blockquote><h2>Testimonial:</h2><p>“Carol is doing incredible right now; she looks awesome and is enjoying life. It has been such a change in a short period of time, we never would have thought she could of come this far already. It is hard to believe only 4 months ago that she entered The Center.”&nbsp; ~ Jim M., a father</p></blockquote><p>&nbsp;</p><h2>Location/Contact Information</h2><p>Mail address: 547 Dayton Street, Edmonds, Washington 98020</p><p>For information: (425) 771-5166 or 1-888-771-5166(Toll Free)</p><p>Visit our website:<a href="http://www.aplaceofhope.com/" target="_blank"> www.aplaceofhope.com</a></p></div>');
	}

}(jQuery));