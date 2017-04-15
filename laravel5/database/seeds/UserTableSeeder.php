<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    private static $_tpl = "abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#&%()[]{}!?";

    private function salt($size) {
        $n = strlen(self::$_tpl);
        $r = "";
        for ($i=0; $i<$size; $i++) {
            $index = rand(0, $n-1);
            $r .= self::$_tpl[$index];
        }
        return $r;
    }

    private function password($pwd, $salt) {
        return Hash::make($pwd.$salt);
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $s = '';
        $u = '';
//Users
$s=$this->salt(48);$u='mhernandez';DB::table('users')->insert(['id'=>1,'username' => $u,'fname' => 'Marco','lname' => 'Hernandez','email' => 'marcohern@gmail.com','gender' => 'M','birth' => '1980-10-15','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='bhader';DB::table('users')->insert(['id'=>10,'username' => $u,'fname' => 'Bill','lname' => 'Hader','email' => 'bhader@mail.com','gender' => 'M','birth' => '1980-11-21','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='jgordonlevitt';DB::table('users')->insert(['id'=>11,'username' => $u,'fname' => 'Joseph','lname' => 'Gordonlevitt','email' => 'jgordonlevitt@mail.com','gender' => 'M','birth' => '1974-11-14','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='wwallace';DB::table('users')->insert(['id'=>12,'username' => $u,'fname' => 'William','lname' => 'Wallace','email' => 'wwallace@mail.com','gender' => 'M','birth' => '1981-06-12','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='mgibson';DB::table('users')->insert(['id'=>13,'username' => $u,'fname' => 'Mel','lname' => 'Gibson','email' => 'mgibson@mail.com','gender' => 'M','birth' => '1978-02-23','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='hstern';DB::table('users')->insert(['id'=>14,'username' => $u,'fname' => 'Howard','lname' => 'Stern','email' => 'hstern@mail.com','gender' => 'M','birth' => '1976-04-15','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='hwollowitz';DB::table('users')->insert(['id'=>15,'username' => $u,'fname' => 'Howard','lname' => 'Wollowitz','email' => 'hwollowitz@mail.com','gender' => 'M','birth' => '1963-06-20','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='scooper';DB::table('users')->insert(['id'=>16,'username' => $u,'fname' => 'Sheldon','lname' => 'Cooper','email' => 'scooper@mail.com','gender' => 'M','birth' => '1986-04-15','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='jcarmack';DB::table('users')->insert(['id'=>17,'username' => $u,'fname' => 'John','lname' => 'Carmack','email' => 'jcarmack@mail.com','gender' => 'M','birth' => '1965-04-22','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='ashumer';DB::table('users')->insert(['id'=>18,'username' => $u,'fname' => 'Amy','lname' => 'Shumer','email' => 'ashumer@mail.com','gender' => 'F','birth' => '1966-09-14','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='lck';DB::table('users')->insert(['id'=>19,'username' => $u,'fname' => 'Louis','lname' => 'CK','email' => 'lck@mail.com','gender' => 'M','birth' => '1969-06-13','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='khart';DB::table('users')->insert(['id'=>20,'username' => $u,'fname' => 'Kevin','lname' => 'Hart','email' => 'khart@mail.com','gender' => 'M','birth' => '1978-04-06','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='tmiller';DB::table('users')->insert(['id'=>21,'username' => $u,'fname' => 'TJ','lname' => 'Miller','email' => 'tmiller@mail.com','gender' => 'M','birth' => '1970-01-05','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='jcusack';DB::table('users')->insert(['id'=>22,'username' => $u,'fname' => 'John','lname' => 'Cusack','email' => 'jcusack@mail.com','gender' => 'M','birth' => '1981-09-08','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='sjohansen';DB::table('users')->insert(['id'=>23,'username' => $u,'fname' => 'Scarlet','lname' => 'Johansen','email' => 'sjohansen@mail.com','gender' => 'F','birth' => '1965-06-26','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='wallen';DB::table('users')->insert(['id'=>24,'username' => $u,'fname' => 'Woody','lname' => 'Allen','email' => 'wallen@mail.com','gender' => 'M','birth' => '1973-07-04','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='thanks';DB::table('users')->insert(['id'=>25,'username' => $u,'fname' => 'Tom','lname' => 'Hanks','email' => 'thanks@mail.com','gender' => 'M','birth' => '1980-06-15','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='lminelli';DB::table('users')->insert(['id'=>26,'username' => $u,'fname' => 'Lisa','lname' => 'Minelli','email' => 'lminelli@mail.com','gender' => 'M','birth' => '1969-02-19','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='dschwimmer';DB::table('users')->insert(['id'=>27,'username' => $u,'fname' => 'David','lname' => 'Schwimmer','email' => 'dschwimmer@mail.com','gender' => 'M','birth' => '1963-08-06','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='janiston';DB::table('users')->insert(['id'=>28,'username' => $u,'fname' => 'Jennifer','lname' => 'Aniston','email' => 'janiston@mail.com','gender' => 'F','birth' => '1967-04-15','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='cobrien';DB::table('users')->insert(['id'=>29,'username' => $u,'fname' => 'Conan','lname' => 'OBrien','email' => 'cobrien@mail.com','gender' => 'M','birth' => '1970-10-13','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='sbee';DB::table('users')->insert(['id'=>30,'username' => $u,'fname' => 'Samantha','lname' => 'Bee','email' => 'sbee@mail.com','gender' => 'F','birth' => '1972-10-13','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='joliver';DB::table('users')->insert(['id'=>31,'username' => $u,'fname' => 'John','lname' => 'Oliver','email' => 'joliver@mail.com','gender' => 'M','birth' => '1970-04-05','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='tnoah';DB::table('users')->insert(['id'=>32,'username' => $u,'fname' => 'Trevor','lname' => 'Noah','email' => 'tnoah@mail.com','gender' => 'M','birth' => '1989-03-26','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='jstewart';DB::table('users')->insert(['id'=>33,'username' => $u,'fname' => 'Jon','lname' => 'Stewart','email' => 'jstewart@mail.com','gender' => 'M','birth' => '1974-08-23','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='scolbert';DB::table('users')->insert(['id'=>34,'username' => $u,'fname' => 'Stephen','lname' => 'Colbert','email' => 'scolbert@mail.com','gender' => 'M','birth' => '1961-11-01','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='scarrell';DB::table('users')->insert(['id'=>35,'username' => $u,'fname' => 'Steve','lname' => 'Carrell','email' => 'scarrell@mail.com','gender' => 'M','birth' => '1979-10-15','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='cwalken';DB::table('users')->insert(['id'=>36,'username' => $u,'fname' => 'Christopher','lname' => 'Walken','email' => 'cwalken@mail.com','gender' => 'M','birth' => '1972-04-16','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='ccox';DB::table('users')->insert(['id'=>37,'username' => $u,'fname' => 'Courney','lname' => 'Cox','email' => 'ccox@mail.com','gender' => 'F','birth' => '1964-02-12','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='mleblanc';DB::table('users')->insert(['id'=>38,'username' => $u,'fname' => 'Mat','lname' => 'LeBlanc','email' => 'mleblanc@mail.com','gender' => 'M','birth' => '1978-05-10','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='mperry';DB::table('users')->insert(['id'=>39,'username' => $u,'fname' => 'Matthew','lname' => 'Perry','email' => 'mperry@mail.com','gender' => 'M','birth' => '1988-08-02','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='bpitt';DB::table('users')->insert(['id'=>40,'username' => $u,'fname' => 'Brad','lname' => 'Pitt','email' => 'bpitt@mail.com','gender' => 'M','birth' => '1972-04-22','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='ajolie';DB::table('users')->insert(['id'=>41,'username' => $u,'fname' => 'Angelina','lname' => 'jolie','email' => 'ajolie@mail.com','gender' => 'F','birth' => '1973-12-22','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='sbullock';DB::table('users')->insert(['id'=>42,'username' => $u,'fname' => 'Sandra','lname' => 'Bullock','email' => 'sbullock@mail.com','gender' => 'F','birth' => '1984-09-01','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='bpaxton';DB::table('users')->insert(['id'=>43,'username' => $u,'fname' => 'Bill','lname' => 'Paxton','email' => 'bpaxton@mail.com','gender' => 'M','birth' => '1970-04-13','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='emurphy';DB::table('users')->insert(['id'=>44,'username' => $u,'fname' => 'Eddy','lname' => 'Murphy','email' => 'emurphy@mail.com','gender' => 'M','birth' => '1979-05-14','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='sweaver';DB::table('users')->insert(['id'=>45,'username' => $u,'fname' => 'Sigourney','lname' => 'Weaver','email' => 'sweaver@mail.com','gender' => 'F','birth' => '1975-04-27','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='sbushemi';DB::table('users')->insert(['id'=>46,'username' => $u,'fname' => 'Steve','lname' => 'Bushemi','email' => 'sbushemi@mail.com','gender' => 'M','birth' => '1966-09-07','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='dtrump';DB::table('users')->insert(['id'=>47,'username' => $u,'fname' => 'Donald','lname' => 'Trump','email' => 'dtrump@mail.com','gender' => 'M','birth' => '1964-02-21','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='rzellweguer';DB::table('users')->insert(['id'=>48,'username' => $u,'fname' => 'Rene','lname' => 'Zellweguer','email' => 'rzellweguer@mail.com','gender' => 'F','birth' => '1981-10-02','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='jgyllenhaal';DB::table('users')->insert(['id'=>49,'username' => $u,'fname' => 'Jake','lname' => 'Gyllenhaal','email' => 'jgyllenhaal@mail.com','gender' => 'M','birth' => '1981-12-19','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='jromero';DB::table('users')->insert(['id'=>50,'username' => $u,'fname' => 'John','lname' => 'Romero','email' => 'jromero@mail.com','gender' => 'M','birth' => '1980-04-10','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='bfraser';DB::table('users')->insert(['id'=>51,'username' => $u,'fname' => 'Brandon','lname' => 'Fraser','email' => 'bfraser@mail.com','gender' => 'M','birth' => '1986-11-27','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='obloom';DB::table('users')->insert(['id'=>52,'username' => $u,'fname' => 'Orlando','lname' => 'Bloom','email' => 'obloom@mail.com','gender' => 'M','birth' => '1985-07-22','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='kperry';DB::table('users')->insert(['id'=>53,'username' => $u,'fname' => 'Katy','lname' => 'Perry','email' => 'kperry@mail.com','gender' => 'M','birth' => '1960-07-05','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='boriley';DB::table('users')->insert(['id'=>54,'username' => $u,'fname' => 'Bill','lname' => 'Oriley','email' => 'boriley@mail.com','gender' => 'M','birth' => '1964-12-20','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='jhill';DB::table('users')->insert(['id'=>55,'username' => $u,'fname' => 'Jonah','lname' => 'Hill','email' => 'jhill@mail.com','gender' => 'M','birth' => '1975-12-14','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='srogen';DB::table('users')->insert(['id'=>56,'username' => $u,'fname' => 'Seth','lname' => 'Rogen','email' => 'srogen@mail.com','gender' => 'M','birth' => '1967-02-07','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='sgreen';DB::table('users')->insert(['id'=>57,'username' => $u,'fname' => 'Seth','lname' => 'Green','email' => 'sgreen@mail.com','gender' => 'M','birth' => '1967-04-19','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='jbelushi';DB::table('users')->insert(['id'=>58,'username' => $u,'fname' => 'Jim','lname' => 'Belushi','email' => 'jbelushi@mail.com','gender' => 'M','birth' => '1990-08-15','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='bmurray';DB::table('users')->insert(['id'=>59,'username' => $u,'fname' => 'Bill','lname' => 'Murray','email' => 'bmurray@mail.com','gender' => 'M','birth' => '1969-09-28','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='jfranco';DB::table('users')->insert(['id'=>60,'username' => $u,'fname' => 'James','lname' => 'Franco','email' => 'jfranco@mail.com','gender' => 'M','birth' => '1977-10-17','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='abaldwin';DB::table('users')->insert(['id'=>61,'username' => $u,'fname' => 'Alec','lname' => 'Baldwin','email' => 'abaldwin@mail.com','gender' => 'M','birth' => '1983-10-12','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='dchopra';DB::table('users')->insert(['id'=>62,'username' => $u,'fname' => 'Depaak','lname' => 'Chopra','email' => 'dchopra@mail.com','gender' => 'M','birth' => '1978-02-09','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);
$s=$this->salt(48);$u='acooper';DB::table('users')->insert(['id'=>63,'username' => $u,'fname' => 'Anderson','lname' => 'Cooper','email' => 'acooper@mail.com','gender' => 'M','birth' => '1966-09-22','role' => 'ADMIN', 'salt' => $s, 'password' => Hash::make($u.$s), 'created_at' => new \Datetime('now')]);


    }
}