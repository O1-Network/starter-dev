# TODO: Implement User Model
from enum import Enum

class AccountType(Enum):
    DEVELOPER = 'developer'
    BUSINESS = 'business'
    ADMIN = 'admin'

class User:
    email: str
    password: str
    account_type: str  # TODO: Change this to use enumerated type

    def __init__(self, email: str, password: str, account_type: str):
        self.email = email
        self.password = password
        self.account_type = account_type
