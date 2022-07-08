package com.ugc.blockchain.payload.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResBlockValidityMessage {
    private boolean valid;
    private String message;
}
