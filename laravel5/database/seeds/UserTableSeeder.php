<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Lib\Hasher;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
//Users
['id'=>  1,'username'=>    'mhernandez','fname'=>      'Marco','lname'=>    'Hernandez','email'=>    'marcohern@gmail.com','gender'=>'M','birth'=>'1980-10-15'],
['id'=>  2,'username'=>      'abolaños','fname'=>      'Alain','lname'=>      'Bolaños','email'=>      'abolaños@mail.com','gender'=>'M','birth'=>'1958-11-08'],
['id'=>  3,'username'=>    'fnavarrete','fname'=>     'Felipe','lname'=>    'Navarrete','email'=>    'fnavarrete@mail.com','gender'=>'M','birth'=>'1962-06-24'],
['id'=>  4,'username'=>        'eprada','fname'=>     'Edison','lname'=>        'Prada','email'=>        'eprada@mail.com','gender'=>'M','birth'=>'1984-09-19'],
['id'=>  5,'username'=>       'fgelves','fname'=>      'Fabio','lname'=>       'Gelves','email'=>       'fgelves@mail.com','gender'=>'M','birth'=>'1969-11-10'],
['id'=>  6,'username'=>   'fmontenegro','fname'=>     'Fabian','lname'=>   'Montenegro','email'=>   'fmontenegro@mail.com','gender'=>'M','birth'=>'1977-03-13'],
['id'=>  7,'username'=>        'apabon','fname'=>    'Adriana','lname'=>        'Pabon','email'=>        'apabon@mail.com','gender'=>'M','birth'=>'1973-04-06'],
['id'=>  8,'username'=>    'ohernandez','fname'=>    'Orlando','lname'=>    'Hernandez','email'=>    'ohernandez@mail.com','gender'=>'M','birth'=>'1985-03-19'],
['id'=>  9,'username'=>     'lcubillos','fname'=>       'Lina','lname'=>     'Cubillos','email'=>     'lcubillos@mail.com','gender'=>'M','birth'=>'1956-02-28'],
['id'=> 10,'username'=>        'bhader','fname'=>       'Bill','lname'=>        'Hader','email'=>        'bhader@mail.com','gender'=>'M','birth'=>'1987-07-08'],
['id'=> 11,'username'=> 'jgordonlevitt','fname'=>     'Joseph','lname'=> 'Gordonlevitt','email'=> 'jgordonlevitt@mail.com','gender'=>'M','birth'=>'1974-03-08'],
['id'=> 12,'username'=>      'wwallace','fname'=>    'William','lname'=>      'Wallace','email'=>      'wwallace@mail.com','gender'=>'M','birth'=>'1956-12-22'],
['id'=> 13,'username'=>       'mgibson','fname'=>        'Mel','lname'=>       'Gibson','email'=>       'mgibson@mail.com','gender'=>'M','birth'=>'1973-09-03'],
['id'=> 14,'username'=>        'hstern','fname'=>     'Howard','lname'=>        'Stern','email'=>        'hstern@mail.com','gender'=>'M','birth'=>'1963-06-25'],
['id'=> 15,'username'=>    'hwollowitz','fname'=>     'Howard','lname'=>    'Wollowitz','email'=>    'hwollowitz@mail.com','gender'=>'M','birth'=>'1966-11-22'],
['id'=> 16,'username'=>       'scooper','fname'=>    'Sheldon','lname'=>       'Cooper','email'=>       'scooper@mail.com','gender'=>'M','birth'=>'1971-06-01'],
['id'=> 17,'username'=>      'jcarmack','fname'=>       'John','lname'=>      'Carmack','email'=>      'jcarmack@mail.com','gender'=>'M','birth'=>'1971-10-05'],
['id'=> 18,'username'=>       'ashumer','fname'=>        'Amy','lname'=>       'Shumer','email'=>       'ashumer@mail.com','gender'=>'F','birth'=>'1953-09-14'],
['id'=> 19,'username'=>           'lck','fname'=>      'Louis','lname'=>           'CK','email'=>           'lck@mail.com','gender'=>'M','birth'=>'1971-10-04'],
['id'=> 20,'username'=>         'khart','fname'=>      'Kevin','lname'=>         'Hart','email'=>         'khart@mail.com','gender'=>'M','birth'=>'1963-08-19'],
['id'=> 21,'username'=>       'tmiller','fname'=>         'TJ','lname'=>       'Miller','email'=>       'tmiller@mail.com','gender'=>'M','birth'=>'1973-03-13'],
['id'=> 22,'username'=>       'jcusack','fname'=>       'John','lname'=>       'Cusack','email'=>       'jcusack@mail.com','gender'=>'M','birth'=>'1973-04-02'],
['id'=> 23,'username'=>     'sjohansen','fname'=>    'Scarlet','lname'=>     'Johansen','email'=>     'sjohansen@mail.com','gender'=>'F','birth'=>'1962-12-07'],
['id'=> 24,'username'=>        'wallen','fname'=>      'Woody','lname'=>        'Allen','email'=>        'wallen@mail.com','gender'=>'M','birth'=>'1958-03-05'],
['id'=> 25,'username'=>        'thanks','fname'=>        'Tom','lname'=>        'Hanks','email'=>        'thanks@mail.com','gender'=>'M','birth'=>'1988-12-20'],
['id'=> 26,'username'=>      'lminelli','fname'=>       'Lisa','lname'=>      'Minelli','email'=>      'lminelli@mail.com','gender'=>'M','birth'=>'1957-12-05'],
['id'=> 27,'username'=>    'dschwimmer','fname'=>      'David','lname'=>    'Schwimmer','email'=>    'dschwimmer@mail.com','gender'=>'M','birth'=>'1954-03-27'],
['id'=> 28,'username'=>      'janiston','fname'=>   'Jennifer','lname'=>      'Aniston','email'=>      'janiston@mail.com','gender'=>'F','birth'=>'1971-11-15'],
['id'=> 29,'username'=>       'cobrien','fname'=>      'Conan','lname'=>       'OBrien','email'=>       'cobrien@mail.com','gender'=>'M','birth'=>'1953-09-25'],
['id'=> 30,'username'=>          'sbee','fname'=>   'Samantha','lname'=>          'Bee','email'=>          'sbee@mail.com','gender'=>'F','birth'=>'1976-08-26'],
['id'=> 31,'username'=>       'joliver','fname'=>       'John','lname'=>       'Oliver','email'=>       'joliver@mail.com','gender'=>'M','birth'=>'1986-10-12'],
['id'=> 32,'username'=>         'tnoah','fname'=>     'Trevor','lname'=>         'Noah','email'=>         'tnoah@mail.com','gender'=>'M','birth'=>'1975-06-04'],
['id'=> 33,'username'=>      'jstewart','fname'=>        'Jon','lname'=>      'Stewart','email'=>      'jstewart@mail.com','gender'=>'M','birth'=>'1970-05-03'],
['id'=> 34,'username'=>      'scolbert','fname'=>    'Stephen','lname'=>      'Colbert','email'=>      'scolbert@mail.com','gender'=>'M','birth'=>'1954-11-05'],
['id'=> 35,'username'=>      'scarrell','fname'=>      'Steve','lname'=>      'Carrell','email'=>      'scarrell@mail.com','gender'=>'M','birth'=>'1981-04-25'],
['id'=> 36,'username'=>       'cwalken','fname'=>'Christopher','lname'=>       'Walken','email'=>       'cwalken@mail.com','gender'=>'M','birth'=>'1964-11-06'],
['id'=> 37,'username'=>          'ccox','fname'=>    'Courney','lname'=>          'Cox','email'=>          'ccox@mail.com','gender'=>'F','birth'=>'1965-04-04'],
['id'=> 38,'username'=>      'mleblanc','fname'=>        'Mat','lname'=>      'LeBlanc','email'=>      'mleblanc@mail.com','gender'=>'M','birth'=>'1963-02-05'],
['id'=> 39,'username'=>        'mperry','fname'=>    'Matthew','lname'=>        'Perry','email'=>        'mperry@mail.com','gender'=>'M','birth'=>'1959-06-09'],
['id'=> 40,'username'=>         'bpitt','fname'=>       'Brad','lname'=>         'Pitt','email'=>         'bpitt@mail.com','gender'=>'M','birth'=>'1966-05-09'],
['id'=> 41,'username'=>        'ajolie','fname'=>   'Angelina','lname'=>        'jolie','email'=>        'ajolie@mail.com','gender'=>'F','birth'=>'1984-09-08'],
['id'=> 42,'username'=>      'sbullock','fname'=>     'Sandra','lname'=>      'Bullock','email'=>      'sbullock@mail.com','gender'=>'F','birth'=>'1957-05-24'],
['id'=> 43,'username'=>       'bpaxton','fname'=>       'Bill','lname'=>       'Paxton','email'=>       'bpaxton@mail.com','gender'=>'M','birth'=>'1968-05-25'],
['id'=> 44,'username'=>       'emurphy','fname'=>       'Eddy','lname'=>       'Murphy','email'=>       'emurphy@mail.com','gender'=>'M','birth'=>'1973-05-15'],
['id'=> 45,'username'=>       'sweaver','fname'=>  'Sigourney','lname'=>       'Weaver','email'=>       'sweaver@mail.com','gender'=>'F','birth'=>'1966-12-21'],
['id'=> 46,'username'=>      'sbushemi','fname'=>      'Steve','lname'=>      'Bushemi','email'=>      'sbushemi@mail.com','gender'=>'M','birth'=>'1950-08-22'],
['id'=> 47,'username'=>        'dtrump','fname'=>     'Donald','lname'=>        'Trump','email'=>        'dtrump@mail.com','gender'=>'M','birth'=>'1973-01-04'],
['id'=> 48,'username'=>   'rzellweguer','fname'=>       'Rene','lname'=>   'Zellweguer','email'=>   'rzellweguer@mail.com','gender'=>'F','birth'=>'1975-08-07'],
['id'=> 49,'username'=>   'jgyllenhaal','fname'=>       'Jake','lname'=>   'Gyllenhaal','email'=>   'jgyllenhaal@mail.com','gender'=>'M','birth'=>'1962-01-06'],
['id'=> 50,'username'=>       'jromero','fname'=>       'John','lname'=>       'Romero','email'=>       'jromero@mail.com','gender'=>'M','birth'=>'1976-04-03'],
['id'=> 51,'username'=>       'bfraser','fname'=>    'Brandon','lname'=>       'Fraser','email'=>       'bfraser@mail.com','gender'=>'M','birth'=>'1979-05-24'],
['id'=> 52,'username'=>        'obloom','fname'=>    'Orlando','lname'=>        'Bloom','email'=>        'obloom@mail.com','gender'=>'M','birth'=>'1973-07-14'],
['id'=> 53,'username'=>        'kperry','fname'=>       'Katy','lname'=>        'Perry','email'=>        'kperry@mail.com','gender'=>'M','birth'=>'1950-07-01'],
['id'=> 54,'username'=>       'boriley','fname'=>       'Bill','lname'=>       'Oriley','email'=>       'boriley@mail.com','gender'=>'M','birth'=>'1982-07-10'],
['id'=> 55,'username'=>         'jhill','fname'=>      'Jonah','lname'=>         'Hill','email'=>         'jhill@mail.com','gender'=>'M','birth'=>'1950-11-04'],
['id'=> 56,'username'=>        'srogen','fname'=>       'Seth','lname'=>        'Rogen','email'=>        'srogen@mail.com','gender'=>'M','birth'=>'1964-01-09'],
['id'=> 57,'username'=>        'sgreen','fname'=>       'Seth','lname'=>        'Green','email'=>        'sgreen@mail.com','gender'=>'M','birth'=>'1988-07-25'],
['id'=> 58,'username'=>      'jbelushi','fname'=>        'Jim','lname'=>      'Belushi','email'=>      'jbelushi@mail.com','gender'=>'M','birth'=>'1988-09-27'],
['id'=> 59,'username'=>       'bmurray','fname'=>       'Bill','lname'=>       'Murray','email'=>       'bmurray@mail.com','gender'=>'M','birth'=>'1973-01-10'],
['id'=> 60,'username'=>       'jfranco','fname'=>      'James','lname'=>       'Franco','email'=>       'jfranco@mail.com','gender'=>'M','birth'=>'1981-11-23'],
['id'=> 61,'username'=>      'abaldwin','fname'=>       'Alec','lname'=>      'Baldwin','email'=>      'abaldwin@mail.com','gender'=>'M','birth'=>'1950-05-06'],
['id'=> 62,'username'=>       'dchopra','fname'=>     'Depaak','lname'=>       'Chopra','email'=>       'dchopra@mail.com','gender'=>'M','birth'=>'1950-12-21'],
['id'=> 63,'username'=>       'acooper','fname'=>   'Anderson','lname'=>       'Cooper','email'=>       'acooper@mail.com','gender'=>'M','birth'=>'1977-08-22'],
['id'=> 64,'username'=>    'lhofstader','fname'=>    'Leonard','lname'=>    'Hofstader','email'=>    'lhofstader@mail.com','gender'=>'M','birth'=>'1986-11-21'],
['id'=> 65,'username'=>        'lnemoy','fname'=>    'Leonard','lname'=>        'Nemoy','email'=>        'lnemoy@mail.com','gender'=>'M','birth'=>'1977-05-01'],
['id'=> 66,'username'=>       'dakroyd','fname'=>        'Dan','lname'=>       'Akroyd','email'=>       'dakroyd@mail.com','gender'=>'M','birth'=>'1974-10-25'],
['id'=> 67,'username'=>     'imckellen','fname'=>        'Ian','lname'=>     'Mckellen','email'=>     'imckellen@mail.com','gender'=>'M','birth'=>'1966-10-15'],
['id'=> 68,'username'=>      'pstewart','fname'=>    'Patrick','lname'=>      'Stewart','email'=>      'pstewart@mail.com','gender'=>'M','birth'=>'1960-03-26'],
['id'=> 69,'username'=>    'swaterston','fname'=>        'Sam','lname'=>    'Waterston','email'=>    'swaterston@mail.com','gender'=>'M','birth'=>'1952-04-09'],
['id'=> 70,'username'=>        'wsmith','fname'=>       'Will','lname'=>        'Smith','email'=>        'wsmith@mail.com','gender'=>'M','birth'=>'1961-03-07'],
['id'=> 71,'username'=>        'fdurst','fname'=>       'Fred','lname'=>        'Durst','email'=>        'fdurst@mail.com','gender'=>'M','birth'=>'1954-10-23'],
['id'=> 72,'username'=>   'mgyllenhaal','fname'=>     'Maggie','lname'=>   'Gyllenhaal','email'=>   'mgyllenhaal@mail.com','gender'=>'M','birth'=>'1979-02-10'],
['id'=> 73,'username'=>       'tcruise','fname'=>        'Tom','lname'=>       'Cruise','email'=>       'tcruise@mail.com','gender'=>'M','birth'=>'1965-04-25'],
['id'=> 74,'username'=>     'srockwell','fname'=>        'Sam','lname'=>     'Rockwell','email'=>     'srockwell@mail.com','gender'=>'M','birth'=>'1960-12-14'],
['id'=> 75,'username'=>       'bcooper','fname'=>    'Bradley','lname'=>       'Cooper','email'=>       'bcooper@mail.com','gender'=>'M','birth'=>'1964-02-19'],
['id'=> 76,'username'=>      'hburress','fname'=>    'Hanibal','lname'=>      'Burress','email'=>      'hburress@mail.com','gender'=>'M','birth'=>'1973-02-17'],
['id'=> 77,'username'=>        'tscott','fname'=>        'Tom','lname'=>        'Scott','email'=>        'tscott@mail.com','gender'=>'M','birth'=>'1969-05-28'],
['id'=> 78,'username'=>     'bmckenzie','fname'=>      'Brett','lname'=>     'Mckenzie','email'=>     'bmckenzie@mail.com','gender'=>'M','birth'=>'1963-04-21'],
['id'=> 79,'username'=>      'jclement','fname'=>   'Jermaine','lname'=>      'Clement','email'=>      'jclement@mail.com','gender'=>'M','birth'=>'1960-04-25'],
['id'=> 80,'username'=>         'ewood','fname'=>     'Elijah','lname'=>         'Wood','email'=>         'ewood@mail.com','gender'=>'M','birth'=>'1970-02-09'],
['id'=> 81,'username'=>      'pshukoff','fname'=>      'Peter','lname'=>      'Shukoff','email'=>      'pshukoff@mail.com','gender'=>'M','birth'=>'1959-02-18'],
['id'=> 82,'username'=>     'lahlquist','fname'=>      'Lloyd','lname'=>     'Ahlquist','email'=>     'lahlquist@mail.com','gender'=>'M','birth'=>'1970-11-09'],
['id'=> 83,'username'=>        'rquaid','fname'=>      'Randy','lname'=>        'Quaid','email'=>        'rquaid@mail.com','gender'=>'M','birth'=>'1971-06-21'],
['id'=> 84,'username'=>        'dquiad','fname'=>     'Dennis','lname'=>        'Quiad','email'=>        'dquiad@mail.com','gender'=>'M','birth'=>'1960-05-25'],
['id'=> 85,'username'=>        'rweisz','fname'=>     'Rachel','lname'=>        'Weisz','email'=>        'rweisz@mail.com','gender'=>'M','birth'=>'1972-07-23'],
['id'=> 86,'username'=>     'ssarandon','fname'=>      'Susan','lname'=>     'Sarandon','email'=>     'ssarandon@mail.com','gender'=>'M','birth'=>'1988-12-23'],
['id'=> 87,'username'=>         'lmann','fname'=>     'Leslie','lname'=>         'Mann','email'=>         'lmann@mail.com','gender'=>'M','birth'=>'1977-11-13'],
['id'=> 88,'username'=>        'kupton','fname'=>       'Kate','lname'=>        'Upton','email'=>        'kupton@mail.com','gender'=>'M','birth'=>'1986-01-13'],
['id'=> 89,'username'=>         'cdiaz','fname'=>    'Cameron','lname'=>         'Diaz','email'=>         'cdiaz@mail.com','gender'=>'M','birth'=>'1951-09-01'],
['id'=> 90,'username'=>'ncoster-waldau','fname'=>    'Nikolaj','lname'=>'Coster-Waldau','email'=>'ncoster-waldau@mail.com','gender'=>'M','birth'=>'1954-09-11'],
['id'=> 91,'username'=>        'nminaj','fname'=>      'Nicky','lname'=>        'Minaj','email'=>        'nminaj@mail.com','gender'=>'M','birth'=>'1971-05-12'],
['id'=> 92,'username'=>         'sdogg','fname'=>      'Snoop','lname'=>         'Dogg','email'=>         'sdogg@mail.com','gender'=>'M','birth'=>'1982-04-23'],
['id'=> 93,'username'=>     'swilliams','fname'=>     'Serena','lname'=>     'Williams','email'=>     'swilliams@mail.com','gender'=>'M','birth'=>'1958-07-19'],
['id'=> 94,'username'=>     'vwilliams','fname'=>      'Venus','lname'=>     'Williams','email'=>     'vwilliams@mail.com','gender'=>'M','birth'=>'1963-04-18'],
['id'=> 95,'username'=>      'vhudgens','fname'=>    'Vanessa','lname'=>      'Hudgens','email'=>      'vhudgens@mail.com','gender'=>'M','birth'=>'1960-08-04'],
['id'=> 96,'username'=>     'jtwocents','fname'=>       'Jayz','lname'=>     'Twocents','email'=>     'jtwocents@mail.com','gender'=>'M','birth'=>'1972-08-07'],
['id'=> 97,'username'=>     'ltechtips','fname'=>      'Linus','lname'=>     'Techtips','email'=>     'ltechtips@mail.com','gender'=>'M','birth'=>'1966-08-22'],
['id'=> 98,'username'=>        'hgreen','fname'=>       'Hank','lname'=>        'Green','email'=>        'hgreen@mail.com','gender'=>'M','birth'=>'1958-09-16'],
['id'=> 99,'username'=>        'jgreen','fname'=>       'John','lname'=>        'Green','email'=>        'jgreen@mail.com','gender'=>'M','birth'=>'1979-08-11'],
['id'=>100,'username'=>        'mtwain','fname'=>       'Mark','lname'=>        'Twain','email'=>        'mtwain@mail.com','gender'=>'M','birth'=>'1984-01-03'],
        ];
        
        //set missing fields, hash passwords
        for($i=0;$i<count($users);$i++) {
            $s = Hasher::salt();
            $users[$i]['salt'] = $s;
            $users[$i]['password']=Hasher::password($s, $users[$i]['username']);
            $users[$i]['role'] = 'ADMIN';
            $users[$i]['created_at'] = new \Datetime("now");
        }

        User::insert($users);
    }
}