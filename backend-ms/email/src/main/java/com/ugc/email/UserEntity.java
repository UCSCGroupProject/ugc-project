package com.ugc.email;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private long userid;

    private String emailId;

    private String password;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private boolean isEnabled;

    public boolean getisEnabled() {
        return isEnabled;
    }

    public void setisEnabled(boolean isEnabled) {
        this.isEnabled = isEnabled;
    }

    public String getemailId() {
        return emailId;
    }

    public void setemailId(String emailId) {
        this.emailId = emailId;
    }

    public String getpassword() {
        return password;
    }

    // Setter
    public void setpassword(String password) {
        this.password = password;
    }

    public String getfirstName() {
        return firstName;
    }

    // Setter
    public void setfirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getlastName() {
        return lastName;
    }

    // Setter
    public void setlastName(String lastName) {
        this.lastName = lastName;
    }

}