import smtplib
from string import Template
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import json
from database.models.suscribers_models import Suscribers
import os


class Informer:

    def __init__(self):
        self.suscribers = []
        self.email = os.getenv("MAIL_ADDRESS")
        self.password = os.getenv("MAIL_PASSWORD")
        self.host = os.getenv("SMTP_HOST")
        self.port = os.getenv("SMTP_PORT")

    def contacts(self, genre):
        # @param self
        try:
            suscribers = Suscribers.objects().to_json()
            suscribers = json.loads(suscribers)
            for suscriber in suscribers:
                if genre in suscriber['genre']:
                    self.suscribers.append(suscriber['email'])
        except Exception as ex:
            message = {"Error": "Couldn't provide info to suscriber, try again later..."}
            return message

    def read_template(self, filename):
        # @param filename String
        try:
            with open(filename, 'r') as template_file:
                template_file_content = template_file.read()
                return Template(template_file_content)
        except Exception:
            print("No file called ", filename, " was found...")
            exit()

    def send_mail(self, filename, media_name, genre, media_type):
        s = smtplib.SMTP(host=self.host, port=self.port)
        s.starttls()
        s.login(self.email, self.password)
        self.contacts(genre)

        for suscriber in self.suscribers:
            msg = MIMEMultipart()  # create a message

            # add in the actual person name to the message template
            template = self.read_template(filename)
            message = template.substitute(suscriber_name=suscriber.title(),
                                          genre_name=genre,
                                          media_type=media_type,
                                          media_name=media_name)

            # setup the parameters of the message
            msg['From'] = self.email
            msg['To'] = suscriber
            msg['Subject'] = "New content added on WatchThisES, this may interest you..."

            # add in the message body
            msg.attach(MIMEText(message, 'plain'))

            # send the message via the server set up earlier.
            s.send_message(msg)

            del msg
