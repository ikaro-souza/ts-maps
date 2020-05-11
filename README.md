# ts-maps
Simple app to practice the use of TypeScript interfaces. It shows two random markers on a Google Maps map.

This idea of this app is to introduce you to the use of TypeScrpit interfaces by creating an interface that defines which properties a class should have to be able to be shown as marker on a map.
It also covers the topics of access modifiers and "developer-safe code" by implementing a CustomMap class that works on top of the Map class on the Google Maps type definition file. The CustomMap class defines how much access to the Google Maps Api the app will have, and how that access will happen, therefore reducing the overall complexity of the app and the chances of a developer doing something wrong with the api.
