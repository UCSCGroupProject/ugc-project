package com.ugc.notification.email;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EmailRequest {
    private String fullname;
    private String email;
    private String subject;
    private String content;

}
